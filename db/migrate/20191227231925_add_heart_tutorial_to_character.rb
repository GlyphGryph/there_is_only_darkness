class AddHeartTutorialToCharacter < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :heart_tutorial_complete, :boolean, default: false, null: false
  end
end
