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
      # ActionCable.server.broadcast 'chat_channel',
      #   body: @message.body,
      #   author: @message.author.username
      #   created_at: @message.created_at
      render 'api/messages/show'
    else
      render json: @message.errors.full_messages, status: 402
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :channel_id)
  end
end
