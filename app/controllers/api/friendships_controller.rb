class Api::FriendshipsController < ApplicationController

  def index
    # @friendships = Friendship.find_by(friend1: current_user.id)
    @users = current_user.friends
    render 'api/users/index'
  end

  def create

    @user = params[:id][0] == '#' ? User.find_by(username: params[:id][1..-1]) : User.find_by(id: params[:id])

    if @user
      if @user == current_user
        render json: ['Cannot add self'], status: 402
      else
        @friendship1 = Friendship.new(friend1: current_user.id, friend2: @user.id)
        @friendship2 = Friendship.new(friend2: current_user.id, friend1: @user.id)
        if @friendship1.save && @friendship2.save
          render 'api/users/show'
        else
          render json: ['Already added as a friend'], status: 402
        end
      end
    else
      render json: ['User not found'], status: 404
    end
  end

  def show
  end

  def destroy
    @friendship1 = Friendship.find_by(friend1: current_user.id, friend2: params[:id])
    @friendship2 = Friendship.find_by(friend2: current_user.id, friend1: params[:id])
    if @friendship1 && @friendship2
      @friendship1.destroy!
      @friendship2.destroy!
      render json: {}
    else
      render json: ['Not friends with this user']
    end
  end
end
