debugger
if @users
  json.user do
    @users.pluck(:id)
  end
else
  json.user do
    []
  end
end

if @channels
  json.channel do
    @channels.pluck(:id)
  end
else
  json.user do
    []
  end
end

if @servers
  json.channel do
    json.partial! 'api/servers/serverindex', server: @servers
  end
else
  json.user do
    []
  end
end

if @dms
  json.channel do
    json.partial! 'api/servers/serverindex', server: @servers
  end
else
  json.user do
    []
  end
end
debugger
