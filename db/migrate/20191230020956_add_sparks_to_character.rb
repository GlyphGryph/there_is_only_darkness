class AddSparksToCharacter < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :hope_sparks, :integer, default: 0, null: false
    add_column :characters, :love_sparks, :integer, default: 0, null: false
    add_column :characters, :purpose_sparks, :integer, default: 0, null: false
    add_column :characters, :change_sparks, :integer, default: 0, null: false
  end
end
