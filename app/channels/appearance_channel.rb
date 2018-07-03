class DirectChannel < ApplicationCable::Channel
  def subscribed
    stream_for current_user
    # current_user.update(online: true)
    # AnnounceOnlineStatusJob.perform_later current_user
  end

  def unsubscribed
    # current_user.update(online: false)
    # AnnounceOnlineStatusJob.perform_later current_user
  end

end
