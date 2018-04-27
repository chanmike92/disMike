class Api::FriendshipsController

  def index
    @friendships = Friendship.find_by(friend1: current_user.id)
    render 'api/friendship/index'
  end

  def create

    @user = params[:id][0] == '#' ? User.find(params[:id]) : User.find_by(username: params[:id])
    if @user
      @friendship1 = Friendship.new(friend1: current_user.id, friend2: params[:id])
      @friendship2 = Friendship.new(friend2: current_user.id, friend1: params[:id])
      if @friendship1.save && @friendship2.save
        render 'api/friendship/show'
      else
        render json: ['Already added as a friend']
      end
    else
      render json: ['User ID not found']
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
