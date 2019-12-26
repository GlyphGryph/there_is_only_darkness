class Api::PagesController < ApplicationController
  before_action :authenticate_user!

  def turn
    region = current_user.character.region
    region.turn_to_page(params[:id].to_i)
    render json: current_user.reload.get_game_state
  end
end
