if @user
  json.currentUser do
    json.partial! 'api/users/user', user: @user
  end

  json.partial! 'api/servers/serverindex', server: @servers

  json.users do
    json.partial! 'api/users/userindex', users: @users
  end
end
