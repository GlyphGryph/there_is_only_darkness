class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :world, dependent: :destroy
  has_one :character, dependent: :destroy

  def get_game_state
    game_state = {gameState: {
      worldExists: world.present?
    }}

    if(world.present?)
      game_state[:gameState][:world] = world.get_state
      game_state[:gameState][:character] = character.get_state
      game_state[:gameState][:region] = character.region.get_state
    end
    
    game_state.to_json
  end
end
