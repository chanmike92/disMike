json.dm do
  json.partial! 'api/dms/dm', dm: @dm, user: current_user
end
