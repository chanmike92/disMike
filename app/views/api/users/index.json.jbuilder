

@users.each do |user|
  json.set! user.id do
    json.extract! message, :id, :username, :email
  end
end
