class AddHeartTutorialToCharacter < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :heart_tutorial, :bool, default: true, null: false
  end
end
