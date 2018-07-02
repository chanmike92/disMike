class Api::UsersController < ApplicationController

  def index
    @users = Server.find(params[:id]).subscribed_users
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
      @friendships = @user.friendships.includes(:friend)
      @dms = @user.dmchannels.includes(:subscribers)

      @servers = @user.subscribed_servers.includes(:channels, :subscribed_users, :messages)
      render 'api/users/payload'
    else
      render json: @user.errors.full_messages, status: 402
    end

  end

  def payload
    @user = current_user
    @dms = @user.dmchannels.includes(:subscribers)
    @servers = current_user.subscribed_servers.includes(:channels, :subscribed_users, :messages)

    @friendships = current_user.friendships.includes(:friend)

    render 'api/users/payload'
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
