json.dm do
  json.partial! 'api/dms/dm', dm: @dm, user: current_user
end

json.users do
  json.partial 'api/users/userindex', users: @dm.subscribers
end
