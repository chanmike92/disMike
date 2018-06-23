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
      @server = Server.create(owner_id: @user.id, name: @user.username)
      Serversubscription.create(user_id: @user.id, server_id: @server.id)
      @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 402
    end
  end

  def update
    @user = current_user
    @user.image = params[:user][:image]

    if @user.save
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 402
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
