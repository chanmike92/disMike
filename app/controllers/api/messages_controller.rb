class Api::MessagesController < ApplicationController


  def index

    @messages = Channel.find(params[:id]).messages
    
    if @messages
      render 'api/messages/index'
    else
      render json: {}
    end
  end

  def create
    @message = Message.new(message_params)
    
    if @message.save
      render 'api/message/show'
    else
      render json: @message.errors.full_messages, status: 402
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id)
  end
end
