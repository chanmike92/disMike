class AnnounceOnlineStatusJob < ApplicationJob
  queue_as :default

  def perform(session_user)
    user = render_user(session_user)
    # JSON.parse(render('/api/users/_user.json.jbuilder', locals: { user: session_user }))
    session_user.acquaintances.each do |acquaintance|
      # if session_user != acquaintance
        DirectChannel.broadcast_to acquaintance, command: 'fetch_user',
            data: user
      # end
    end

    DirectChannel.broadcast_to session_user, command: 'fetch_user', data: user
  end

  # private
  def render_user(user)
    @user = user
    JSON.parse(ApplicationController.renderer.render('/api/users/_user.json.jbuilder', locals: { user: user }))
  end


end
