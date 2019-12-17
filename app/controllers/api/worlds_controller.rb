class Api::WorldsController < ApplicationController
  before_action :authenticate_user!

  def create
    if(current_user.world.nil?)
      current_user.world = World.create
      current_user.save!
      Character.create(user: current_user)
      render json: { gameState: {
        world_exists: true
      }}.to_json
    else
      render json: { gameState: {
        world_exists: true
      }}.to_json
    end
  end
end
