

@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name
    json.message_ids channel.messages.pluck(:id)
  end
end
