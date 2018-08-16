class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(user, message)
    DirectChannel.broadcast_to user, command: 'fetch_message', data: message
  end

  private
  def render_message(message)
    ApplicationController.renderer.render(partial: 'messages/message', locals: { message: message })
  end
end
