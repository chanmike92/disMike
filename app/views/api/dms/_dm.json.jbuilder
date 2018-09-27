json.extract! dm, :id
json.name dm.channel_name?(current_user)
json.subscription dm.subscribed?(current_user)
json.user_ids dm.subscribers.pluck(:id).sort!
json.dmreceivers dm.receivers?(current_user)
json.message_ids dm.messages.pluck(:id).sort!
json.type "dm"
