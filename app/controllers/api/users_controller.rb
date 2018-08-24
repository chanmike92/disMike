class Api::UsersController < ApplicationController

  def index
    @users = Server.find(params[:id]).subscribed_users.includes(:subscribed_servers)
    if @users
      render 'api/users/index'
    else
      render json: {}
    end
  end

  def show
    @user = User.find_by(username: params[:username])
    @user_messages = @user.messages
    if @user

      render 'api/users/index'
    else
      render ['Invalid User']
    end
  end

  def create
    @session_user = User.new(user_params)
    if @session_user.save
      login(@session_user)
      render 'api/users/show'
    else
      render json: @session_user.errors.full_messages, status: 402
    end
  end

  def update
    @user = current_user

    if params[:user][:image] == "null"

      @user.reset_profile_picture
    else
      @user.image = params[:user][:image]
    end

    if @user.save
      user = JSON.parse(render('/api/users/_user.json.jbuilder', locals: { user: @user }))
      @user.acquaintances.each do |acquaintance|
        if @user != acquaintance
          DirectChannel.broadcast_to acquaintance, command: 'fetch_user',
              data: user
        end
      end

    else
      render json: @user.errors.full_messages, status: 402
    end

  end

  def payload
    @user = current_user
    @user.update(online_status: true)
    @dms = @user.dmchannels.includes(:subscribers, :messages)
    @servers = current_user.subscribed_servers.includes(:channels, :subscribed_users, :messages)

    @friendships = current_user.friendships.includes(:friend)

    render 'api/users/payload'
  end

  def search
    query = params[:user][:username].downcase
    query = '%' + query.split("").join('%') + '%'
    @users = current_user.acquaintances.where('lower(username) LIKE ?', query)
    render 'api/users/index'
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
