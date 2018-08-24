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

    @dm = Dmchannel.new(dm_params)

    if @dm.save

    else
      render json: @channel.errors.full_messages, status: 402
    end
  end


  def show
    @channel = Dmchannel.find(params[:id])
    @channel_messages = @channel.messages
    if @channel
      render 'api/channels/show'
    else
      render json: {errors: ['Channel does not exist']}, status: 402
    end
  end

  def destroy
    @channel = Dmchannel.find(params[:id])
    subscription = @channel.subscriptions.find_by(user_id: current_user.id)
    subscription.update(subscribed: false)

  end



  private
  def dm_params
    params.require(:dmchannel).permit(:name)
  end
end
