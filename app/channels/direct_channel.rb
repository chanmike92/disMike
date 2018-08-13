class DirectChannel < ApplicationCable::Channel
  def subscribed
    current_user = User.find(params[:id])

    stream_for current_user
    # current_user.update(online: true)
    # AnnounceOnlineStatusJob.perform_later current_user
  end

  def unsubscribed
    # current_user.update(online: false)
    # AnnounceOnlineStatusJob.perform_later current_user
  end

end
