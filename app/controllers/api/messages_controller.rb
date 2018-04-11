class Api::MessagesController < ApplicationController


  def index

    @messages = Channel.find(params[:id]).messages.includes(:author)

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
      ChatChannel.broadcast_to(@message.channel,
        JSON.parse(render('/api/messages/_message.json.jbuilder',
          locals: { message: @message })))
      head :ok

    else
      render json: @message.errors.full_messages, status: 402
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :channel_id)
  end
end
