class BroadcastChannelJob < ApplicationJob
  queue_as :default

  def perform(current_user, channel)
    # new_channel = render_channel(channel)
    # JSON.parse(render('/api/channels/_channel.json.jbuilder', locals: { channel: channel }))
    channel.subscribers.each do |user|
      # if current_user != user
        DirectChannel.broadcast_to user, command: 'fetch_new_channel',
            data: channel
      # end
    end

    # DirectChannel.broadcast_to channel, command: 'fetch_channel', data: channel
  end

  # private
  def render_channel(channel)
    JSON.parse(ApplicationController.renderer.render('/api/channels/_channel.json.jbuilder', locals: { channel: channel }))
  end

end
