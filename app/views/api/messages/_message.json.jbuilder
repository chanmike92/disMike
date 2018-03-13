json.extract! message, :id, :body, :author_id, :channel_id, :created_at
json.author @message.author.username
json.profilepic asset_path(@message.author.image.url)
