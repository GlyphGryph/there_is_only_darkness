class AddHeartToCharacter < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :heart, :text
  end
end
