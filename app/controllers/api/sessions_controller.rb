class Api::SessionsController < ApplicationController

  def create
    @session_user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @session_user
      login(@session_user)
      user = JSON.parse(render('/api/users/_user.json.jbuilder',
        locals: { user: @session_user }))
      @session_user.acquaintances.each do |acquaintance|
        if @session_user != acquaintance
          DirectChannel.broadcast_to(acquaintance, {command: 'fetch_user',
              data: user})
        end
      end
    elsif User.find_by(email: params[:user][:email])
      render json: ['PASSWORD (PASSWORD DOES NOT MATCH)'], status: 422
    else
      render json: ['EMAIL (EMAIL DOES NOT EXIST)'], status: 403
    end
  end

  def destroy
    @session_user = current_user
    # 
    if @session_user
      logout
      user = JSON.parse(render('/api/users/_user.json.jbuilder',
        locals: { user: @session_user }))
      @session_user.acquaintances.each do |acquaintance|
        if @session_user != acquaintance
          DirectChannel.broadcast_to(acquaintance, {command: 'fetch_user',
              data: user})
        end
      end
    else
      render json: ['You need to be signed in'], status: 404
    end
  end
end
