

@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :author_id, :messagable_id, :messagable_type, :created_at
    json.author message.author.username
    json.profilepic asset_path(message.author.image.url)
  end
end
