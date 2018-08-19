json.set! friendship.friend2 do
  json.partial! 'api/users/user', user: friendship.friend
  json.friendship_status friendship.friendship_status
end
