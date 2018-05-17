class ChatChannel < ApplicationCable::Channel
  def subscribed
    # if params[:type] == "Channel"
    #   channel = Channel.find(params[:id])
    # else
    #   channel = DmChannel.find(params[:id])
    # end
    channel = params[:type] == "Channel" ? Channel.find(params[:id]) : DmChannel.find(params[:id])
    stream_for channel
  end

end
