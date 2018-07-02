json.extract! dm, :id
json.name dm.channel_name(current_user)
json.participant_ids dm.subscribers.pluck(:id).sort!
json.message_ids dm.messages.pluck(:id).sort!
