class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save!
      login(@user)
      render 'api/users/show'
    else
      render json: @users.error.full_messages, status: 402
    end
  end

  def update
    @user = current_user
    @user.img_url = params[:user][:img_url]
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
