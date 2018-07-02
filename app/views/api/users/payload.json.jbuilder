if @user
  json.currentUser do
    json.partial! 'api/users/user', user: @user
  end

  if @servers
    json.partial! 'api/servers/serverindex', server: @servers
  end

  if @friendships
    json.friends do
      json.partial! 'api/users/friendindex', friendships: @friendships
    end
  end

  if @dms
    json.partial! 'api/dms/dmsindex', dms: @dms
  end
end
