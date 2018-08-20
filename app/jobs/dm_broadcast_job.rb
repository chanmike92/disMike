class BroadcastDmchannelJob < ApplicationJob
  def perform(payload, user)
    DirectChannel.broadcast_to user, command: 'remove_channel', options: {payload: payload}
  end
end
