
if @user
  json.user do
    json.partial! 'api/users/user', user: @user
  end
end

# if @session_user
#   json.partial! 'api/users/user', user: @session_user
# end
# if @friends
#   json.channel do
#     json.partial! 'api/channels/channel', channel: @channel
#     json.message_ids @channel.messages.pluck(:id)
#   end
# end
