
json.extract! user, :id, :username, :email, :online_status
json.image_url asset_path(user.image.url)
json.friends_id user.friends.pluck(:id).sort!

# json.friendship_status user.friendships.find_by()
