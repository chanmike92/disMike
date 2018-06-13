
json.channels do
  @channels.each do |channel|
    json.partial! 'api/channels/channelindex', channel: channel
  end
end

json.messages do
  @channels.each do |channel|
    channel.messages.each do |messages|
      json.partial! 'api/messages/messageindex', message: messages
    end
  end
end
