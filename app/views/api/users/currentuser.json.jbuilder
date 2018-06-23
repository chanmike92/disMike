if @user
  json.currentUser do
    json.partial! 'api/users/user', user: @user
  end

  json.server do
    json.partial! 'api/servers/server', server: @user.servers
  end

  json.channels do
    @user.channels.each do |channel|
      json.set! channel.id do
        json.partial! 'api/channels/channel', channel: channel
      end
    end
  end

  json.users do
    @user.subscribed_users.each do |user|
      json.set! user.id do
        json.partial! 'api/users/user', user: user
      end
    end
  end
end
