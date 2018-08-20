class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(current_user, message)
    new_message = render_message(message)
    # JSON.parse(render('/api/messages/_message.json.jbuilder', locals: { message: message }))
    message.messagable.subscribers.each do |reader|
      if current_user != reader
        DirectChannel.broadcast_to reader, command: 'fetch_message',
            data: new_message
      end
    end

    # DirectChannel.broadcast_to message, command: 'fetch_message', data: message
  end

  # private
  def render_message(message)
    JSON.parse(ApplicationController.renderer.render('/api/messages/_message.json.jbuilder', locals: { message: message }))
  end

end
