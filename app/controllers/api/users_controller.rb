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

    @user.image = params[:user][:image]
    if @user.save
      @friends = @user.friends
      @servers = @user.subscribed_servers.includes(:channels, :subscribed_users, :messages)
      render 'api/users/payload'
    else
      render json: @user.errors.full_messages, status: 402
    end
  end

  def payload
    @user = current_user
    debugger
    @servers = current_user.subscribed_servers.includes(:channels, :subscribed_users, :messages)

    @users = (current_user.friends + current_user.companions + current_user.dmusers).uniq

    render 'api/users/payload'
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
