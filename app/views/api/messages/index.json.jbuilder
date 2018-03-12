

@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :author_id, :channel_id, :created_at
    json.extract! message.author, :username
  end
end
