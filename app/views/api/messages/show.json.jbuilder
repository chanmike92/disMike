
if @message do
  json.partial! 'api/messages/message', message: @message
  json.author @message.author.username
end
