
json.servers do
  @servers.each do |server|
    json.set! server.id do
      json.partial! 'api/servers/server', server: server
    end
  end
end

json.channels do
  @servers.each do |server|
    json.partial! 'api/channels/channelindex', channels: server.channels
  end
end

json.messages do
  @servers.each do |server|
    json.partial! 'api/messages/messageindex', messages: server.messages
  end
end
