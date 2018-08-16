class DirectChannel < ApplicationCable::Channel
  def subscribed
    current_user = User.find(params[:id])
    current_user.update(online_status: true)

    stream_for current_user
    # AnnounceOnlineStatusJob.perform_later current_user
  end

  def unsubscribed
    current_user.update(online_status: false)
    # AnnounceOnlineStatusJob.perform_later current_user
  end

end
