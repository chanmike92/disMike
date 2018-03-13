json.partial! 'api/messages/message', message: @message
json.author @message.author.username
