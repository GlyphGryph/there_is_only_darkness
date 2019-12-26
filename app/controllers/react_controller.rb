class ReactController < ApplicationController
  before_action :authenticate_user!

  def index
    unless(user_signed_in?)
      redirect_to new_user_session_path
    end
    @game_state = current_user.get_game_state
  end
end
