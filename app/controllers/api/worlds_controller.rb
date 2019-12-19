class Api::WorldsController < ApplicationController
  before_action :authenticate_user!

  def create
    if(current_user.world.nil?)
      world = World.create!(user: current_user)
      Character.create!(user: current_user, world: world)
      current_user.reload
      render json: current_user.get_game_state
    else
      render json: current_user.get_game_state
    end
  end

  def destroy
    if(current_user.world.present?)
      current_user.world.destroy!
      current_user.reload
      render json: current_user.get_game_state
    else
      render json: current_user.get_game_state
    end
  end

end
