class DirectChannel < ApplicationCable::Channel
  def subscribed
    current_user.update(online_status: true)

    stream_for current_user
    AnnounceOnlineStatusJob.perform_now current_user
  end

  def unsubscribed
    current_user.update(online_status: false)
    AnnounceOnlineStatusJob.perform_now current_user
  end


  def current_user
    @current_user ||= User.find(params[:id])
  end
end
