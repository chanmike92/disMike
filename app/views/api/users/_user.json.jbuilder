
json.extract! user, :id, :username, :email, :online_status
json.image_url asset_path(user.image.url)
json.server_ids user.subscribed_servers.pluck(:id).sort!
json.friends_id user.friends.pluck(:id).sort!
if user == current_user
  json.dmId user.find_direct_dm_id(current_user) || nil
else
  json.dmId nil
end
json.type "user"
# json.friendship_status nil

# json.friendship_status user.friendships.find_by()
