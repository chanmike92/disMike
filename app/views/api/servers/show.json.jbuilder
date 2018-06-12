if @server
  json.server do
    json.partial! 'api/servers/server', server: @server
    json.channel_ids @server.channels.pluck(:id)
    json.user_ids @server.subscribed_users.pluck(:id)
  end

  json.channels do
    @server.channels.each do |channel|
      json.set! channel.id do
        json.partial! 'api/channels/channel', channel: channel
        json.message_ids channel.messages.pluck(:id)
      end
    end
  end

  json.users do
    @server.subscribed_users.each do |user|
      json.set! user.id do
        json.partial! 'api/users/user', user: user
      end
    end
  end
end

# if @server_channels
#   json.channels do
#     @server_channels.each do |channel|
#       json.set! channel.id do
#         json.partial! 'api/channels/channel', channel: channel
#         json.message_ids channel.messages.pluck(:id)
#       end
#     end
#   end
# end
#
# if @server_users
#   json.users do
#     @server_users.each do |user|
#       json.set! user.id do
#         json.partial! 'api/users/user', user: user
#       end
#     end
#   end
# end
