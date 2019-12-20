class Api::ActivitiesController < ApplicationController
  before_action :authenticate_user!

  def select
    current_user.world.turn += 1
    current_user.world.save!
    current_user.character.random_walk
    current_user.reload
    render json: current_user.get_game_state
  end
end
