
  json.channel do
    json.partial! 'api/channels/channel', channel: @channel
  end

  json.messages do
    json.partial! 'api/messages/messageindex', messages: @channel.messages
  end
