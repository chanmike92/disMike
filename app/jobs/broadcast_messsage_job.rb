class BroadcastMessageJob < ApplicationJob
  def perform(message, current_user, user)
    DirectChannel.broadcast_to user, command: 'fetch_message', JSON.parse(render('/api/messages/_message.json.jbuilder',
      locals: { message: @message }))
  end
end
