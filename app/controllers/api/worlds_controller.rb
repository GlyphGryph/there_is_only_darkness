class Api::WorldsController < ApplicationController
  before_action :authenticate_user!

  def create
    if(current_user.world.nil?)
      world = World.create!(user: current_user)
      Character.create!(user: current_user, world: world)
      render json: current_user.get_game_state
    else
      render json: current_user.get_game_state
    end
  end
end
