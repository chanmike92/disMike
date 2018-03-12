class Api::ServersController < ApplicationController
  def index

    @servers = current_user.subscribed_servers
    if @servers
      render 'api/servers/index'
    else
      render json: {}
    end
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      Serversubscription.create(user_id: current_user.id, server_id: @server.id)
      Channel.create(name: "general", server_id: @server.id)
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 402
    end
  end

  def join

    @server = Server.find_by(name: params[:server][:name])

    if @server
      @subscription = Serversubscription.new(user_id: current_user.id, server_id: @server.id)
      if @subscription.save
        render 'api/servers/show'
      else
        render json: {errors: ['Already have this server']}, status: 402
      end
    else
      render json: {errors: ['Server does not exist']}, status: 402
    end
  end

  def show

    @server = Server.find(params[:id])
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

    if @server.owner_id == current_user.id
      @server.destroy!
      @servers = current_user.subscribed_servers
      render 'api/servers/index'
    else

      render json: ['You do not have access'], status: 404
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :img_url)
  end
end
