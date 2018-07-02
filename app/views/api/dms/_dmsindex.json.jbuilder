json.dms do
  @dms.each do |dm|
    json.set! dm.id do
      json.partial! 'api/dms/dm', dm: dm
    end
  end
end

json.dmusers do
  @dms.each do |dm|
    json.partial! 'api/users/userindex', users: dm.subscribers
  end
end

json.dmmessages do
  @dms.each do |dm|
    json.partial! 'api/messages/messageindex', messages: dm.messages
  end
end
