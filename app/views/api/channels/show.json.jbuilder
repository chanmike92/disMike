if @channel
  json.channel do
    json.partial! 'api/channels/channel', channel: @channel
    json.message_ids @channel.messages.pluck(:id)
  end


  json.messages do
    @channel.messages.each do |message|
      json.set! message.id do
        json.partial! 'api/messages/message', message: message
      end
    end
  end
end

# if @channel_messages
#
#   json.messages do
#     @channel_messages.each do |message|
#       json.set! message.id do
#         json.partial! 'api/messages/message', message: message
#       end
#     end
#   end
# end
