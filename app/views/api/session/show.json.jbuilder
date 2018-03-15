json.extract! @user, :id, :username, :email
json.image_url asset_path(@user.image.url)
json.currentUserServers @current_user_servers.pluck(:id)
json.currentUserChannels @current_user_channels.pluck(:id)
