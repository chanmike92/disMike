json.extract! user, :id, :username, :email
json.image_url asset_path(user.image.url)
json.friends_id user.friends.pluck(:id)
