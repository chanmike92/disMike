if @server
  json.server do
    json.partial! 'api/servers/server', server: @server
  end

  json.channels do
    json.partial! 'api/channels/channelindex', channels: @server.channels
  end

  json.messages do
    json.partial! 'api/messages/messageindex', messages: @server.messages

  end

  json.users do
    json.partial! 'api/users/userindex', users: @server.subscribed_users
  end
end
