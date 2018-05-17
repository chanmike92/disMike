class Api::DmsController < ApplicationController

  def index

    @dms = current_user.dmchannels
    if @dms
      render 'api/dmchannels/index'
    else
      render json: {}
    end
  end

  def create
    @dm = Dmchannel.new(dmchannel_params)

    if @channel.save
      Serverchannel.create(server_id: params[:id], channel_id: @channel.id)
      render 'api/channels/show'
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



  private
  def channel_params
    params.require(:dmchannel).permit(:name)
  end
end
