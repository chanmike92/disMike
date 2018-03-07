class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: {errors: ['Invalid Credentials']}, status: 403
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
