class BroadcastMessageJob < ApplicationJob
  def perform(message, user)
    debugger
    DirectChannel.broadcast_to user, command: 'fetch_message', options: { message: JSON.parse(render('/api/messages/_message.json.jbuilder',
      locals: { message: message })})
  end
end
