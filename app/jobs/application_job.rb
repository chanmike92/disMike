class ApplicationJob < ActiveJob::Base
  def perform(acquaintance, user)
    DirectChannel.broadcast_to acquaintance, command: 'fetch_message', options: { user: user }
  end
end
