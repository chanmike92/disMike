class Api::ServersController < ApplicationController
  def index

    @servers = Server.all
    render 'api/servers/index'
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 402
    end
  end

  def show
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 402
    end
  end

  def update
    @server = Server.find(params[:id])
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
      render json: {}
    else
      render json: ['You do not have access'], status: 404
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :img_url)
  end
end
