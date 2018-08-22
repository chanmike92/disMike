class Api::MessagesController < ApplicationController


  def index
    if params[:type] == 'Dmchannel'
      @messages = Dmchannel.find(params[:id]).messages.order(:created_at).includes(:author)
    elsif params[:type] == 'Channel'
      @messages = Channel.find(params[:id]).messages.order(:created_at).includes(:author)
    end

    if @messages
      render 'api/messages/index'
    else
      render json: {}
    end
  end

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id

    if @message.save

      if @message.messagable_type = 'Dmchannel'
        @messagable = @message.messagable
        @messagable.subscriptions.each do |subscription|
          if subscription.subscribed == false
            subscription.update(subscribed: true)
          end
        end
      end
      message = JSON.parse(render('/api/messages/_message.json.jbuilder',
        locals: { message: @message }))
          BroadcastMessageJob.perform_now current_user, @message
    else
      render json: @message.errors.full_messages, status: 402
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :messagable_type, :messagable_id)
  end
end
