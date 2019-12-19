class AddRegionToCharacter < ActiveRecord::Migration[6.0]
  def change
    add_reference :characters, :region
  end
end
