class ChatChannel < ApplicationCable::Channel
  def subscribed
    # if params[:type] == "Channel"
    #   channel = Channel.find(params[:id])
    # else
    #   channel = DmChannel.find(params[:id])
    # end
    channel = Channel.find(params[:id])
    stream_for channel
  end

end
