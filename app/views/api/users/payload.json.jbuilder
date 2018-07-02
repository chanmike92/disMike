if @user
  json.currentUser do
    json.partial! 'api/users/user', user: @user
  end

  json.partial! 'api/servers/serverindex', server: @servers

  json.friends do
    json.partial! 'api/users/friendindex', friendships: @friendships
  end

  json.partial! 'api/dms/dmsindex', dms: @dms
end
