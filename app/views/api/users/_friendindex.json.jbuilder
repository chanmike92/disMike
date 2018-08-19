friendships.each do |friendship|
    json.partial! 'api/users/friend', friendship: friendship
end
