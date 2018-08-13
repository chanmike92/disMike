class Api::ChannelsController < ApplicationController

  def index
    @channels = Server.find(params[:id]).channels.includes(:messages)
    if @channels
      render 'api/channels/index'
    else
      render json: {}
    end
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:id]


    if @channel.save
      channel = JSON.parse(render('/api/channels/show.json.jbuilder',
        locals: { channel: @channel }))

      @channel.subscribers.each do |user|

        if user != current_user
      #     @message.broadcast(user)

          DirectChannel.broadcast_to(user, {command: 'fetch_new_channel',
            data: channel})
          # BroadcastMessageJob.perform_now @message, user

        end

      end
    else
      render json: @channel.errors.full_messages, status: 402
    end
  end


  def show

    @channel = Channel.find(params[:id])
    @channel_messages = @channel.messages

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

    if @channel
      if @channel.server.owner_id == current_user.id
        # @channels = @channel.server.channels
        @channel.destroy!
        channelid = @channel.id
        @channel.subscribers.each do |user|

          if user != current_user
        #     @message.broadcast(user)

            DirectChannel.broadcast_to(user, {command: 'delete_channel',
              data: channel})
            # BroadcastMessageJob.perform_now @message, user

          end
        end
      else
        render json: ['You do not have access'], status: 404
      end
    else
      render json: ['Channel does not exist'], status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name)
  end
end
