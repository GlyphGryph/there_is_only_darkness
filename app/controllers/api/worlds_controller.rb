class Api::WorldsController < ApplicationController
  def create
    if(current_user.world.nil?)
      current_user.world << World.create
      Character.create(user: current_user)
      render json: { gameState: [
        {
          world_exists: true
        }
      ] }.to_json
    else
      render json: { gameState: [
        {
          world_exists: false
        }
      ] }.to_json
    end
  end
end
