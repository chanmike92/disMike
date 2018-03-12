class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "chat_channel_#{channel.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # ActionCable.server.broadcast 'chat_channel', message: data['message']
  end
end
