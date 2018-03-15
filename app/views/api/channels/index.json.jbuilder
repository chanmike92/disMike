

@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :server_id
    json.message_ids channel.messages.pluck(:id)
  end
end
