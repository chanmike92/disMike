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
    @user = User.new(user_params)

    if @user.save
      @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 402
    end
  end

  def update
    debugger
    @user = current_user
    @user.image = params[:user][:image]
    debugger
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
    @servers = current_user.subscribed_servers.includes(:channels, :subscribed_users, :messages)
    @friends = current_user.friends

    render 'api/users/payload'
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
