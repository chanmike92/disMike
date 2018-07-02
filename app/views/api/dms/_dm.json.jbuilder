json.extract! dm, :id
json.name dm.channel_name
json.participant_ids dm.subscribers.pluck(:id).sort!
