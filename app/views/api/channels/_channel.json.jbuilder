
json.extract! channel, :id, :name, :server_id
json.type "channel"
json.message_ids channel.messages.pluck(:id).sort!
