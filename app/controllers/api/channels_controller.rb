class Api::ChannelsController < ApplicationController

  def index

    @channels = Server.find(params[:id]).channels
    if @channels
      render 'api/channels/index'
    else
      render json: {}
    end
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 402
    end
  end


  def show
    @channel = Channel.find(params[:id])

    if @channel
      render 'api/channels/show'
    else
      render json: {errors: ['Channel does not exist']}, status: 402
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render 'api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 402
    end
  end

  def destroy
    @channel = Channel.find(params[:id])

    if @channel.server.owner_id == current_user.id
      @channel.destroy!
      render json: {}
    else
      render json: ['You do not have access'], status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
end
