class Api::ServersController < ApplicationController
  def index

    @servers = current_user.subscribed_servers.includes(:channels, :subscribed_users, :messages)

    if @servers
      render 'api/servers/index'
    else
      render json: @servers.errors, status: 422
    end
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if params[:server][:name] == nil
      render json: {create: ['Must enter a name']}, status: 402
    elsif @server.save
      Serversubscription.create(user_id: current_user.id, server_id: @server.id)
      @channel = Channel.create(name: "general", server_id: @server.id)

      # @server_channels = @server.channels
      # @server_users = @server.subscribed_users

      render 'api/servers/show'
    else
      render json: {create: ['Server already exists']}, status: 402
    end
  end

  def join

    if params[:id] == ""
      render json: {joinErrors: ['Must enter an ID']}, status: 402
    elsif params[:id].to_i == 0
      render json: {joinErrors: ['Please Enter ID > 0']}, status: 402
    else

      @server = Server.find_by(id: params[:id])
      if @server
        @sub = Serversubscription.new(user_id: current_user.id, server_id: @server.id)
      end


      if @server && @sub && @sub.save
        @server_channels = @server.channels
        @server_users = @server.subscribed_users
        render 'api/servers/show'
      elsif @server
        render json: {joinErrors: ['Already joined server']}, status: 402
      else
        render json: {joinErrors: ['Server does not exist']}, status: 402
      end
    end
  end

  def leave
    @sub = Serversubscription.find_by(user_id: current_user.id, server_id: params[:id])
    if @sub
      @sub.destroy
      render json: {}
    else
      render json: ['You do not have this server'], status: 404
    end
  end

  def show

    @server = current_user.subscribed_servers.find(params[:id])
    @server_channels = @server.channels
    @server_users = @server.subscribed_users
    if @server
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 402
    end
  end

  def update
    @server = Server.find(params[:server][:id])
    @server.img_url = params[:server][:img_url]
    if @server.save
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 402
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if @server
      if @server.owner_id == current_user.id
        @server.destroy!
        # @servers = current_user.subscribed_servers
        # render 'api/servers/index'
        render json: {}
      else
        render json: ['You do not have access'], status: 404
      end
    else
      render json: ['Server does not exist'], status: 404
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :img_url)
  end
end
