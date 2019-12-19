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
      game_state[:gameState][:worldId] = world.id
      game_state[:gameState][:characterId] = character.id
      game_state[:gameState][:region] = {
        name: character.region.name,
        description: character.region.description
      }
      game_state[:gameState][:exits] = character.region.exits.map do |path|
        {name: path.name}
      end
    end
    
    game_state.to_json
  end
end
