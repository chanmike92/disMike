if @users
  json.users do
    json.partial! 'api/users/userindex', users: @users
  end
end

if @channels
  json.channels do
    json.partial! 'api/channels/channelindex', channels: @server.channels
  end
end

if @servers
  json.servers do
    @servers.each do |server|
      json.set! server.id do
        json.partial! 'api/servers/server', server: server
      end
    end
  end
end

if @dms
  json.dms do
    @dms.each do |dm|
      json.set! dm.id do
        json.partial! 'api/dms/dm', dm: dm
      end
    end
  end
end
