json.extract! server, :id, :name, :owner_id
json.image_url asset_path(server.image.url)
json.channel_ids server.channels.pluck(:id).sort!
json.user_ids server.subscribed_users.pluck(:id).sort!
