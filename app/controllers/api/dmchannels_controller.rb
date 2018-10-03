class Api::DmchannelsController < ApplicationController

  def index

    @dms = current_user.dmchannels
    if @dms
      render 'api/dmchannels/index'
    else
      render json: {}
    end
  end

  def create

    @dm = Dmchannel.find_direct_dm(params[:id])
    if @dm
      @dm.subscribe(current_user)
      render 'api/dms/show'
    else
      @dm = Dmchannel.new()
      @dmsub1 = Dmsubscriber.new(dm_id: @dm.id, user_id: current_user.id, subscribed: true);
      @dmsub2 = Dmsubscriber.new(dm_id: @dm.id, user_id: params[:id], subscribed: false);
      if @dm.save && @dmsub1.save && @dmsub2.save
        render 'api/dms/show'
      else
        render json: {errors: ['Something went wrong with Dm']}, status: 402
      end
    end
  end


  def show
    @channel = Dmchannel.find(params[:id])
    @channel_messages = @channel.messages
    if @channel
      render 'api/dms/show'
    else
      render json: {errors: ['Dm does not exist']}, status: 402
    end
  end

  def add

  end

  def destroy
    @channel = Dmchannel.find(params[:id])
    @channel.unsubscribe(current_user)

  end




  private
  def dm_params
    params.require(:dmchannel).permit(:name)
  end
end
