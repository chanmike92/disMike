json.extract! server, :id, :name, :owner_id

if server.image.exists?
    json.image_url asset_path(server.image.url)
else
    json.image_url nil
end
json.display_name server.iconName
json.channel_ids server.channels.pluck(:id).sort!
json.user_ids server.subscribed_users.pluck(:id).sort!
