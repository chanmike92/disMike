json.extract! server, :id, :name, :owner_id, :img_url
json.channel_ids server.channels.pluck(:id)
json.user_ids server.subscribed_users.pluck(:id)
