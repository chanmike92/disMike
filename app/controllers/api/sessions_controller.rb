class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)

      render 'api/users/show'
    elsif User.find_by(email: params[:user][:email])
      render json: ['PASSWORD (PASSWORD DOES NOT MATCH)'], status: 422
    else
      render json: ['EMAIL (EMAIL DOES NOT EXIST)'], status: 403
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render json: {}
    else
      render json: ['You need to be signed in'], status: 404
    end
  end
end
