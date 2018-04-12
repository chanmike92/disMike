

@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name
    json.server_ids @channel.servers.pluck(:id)
    json.message_ids channel.messages.pluck(:id)
  end
end
