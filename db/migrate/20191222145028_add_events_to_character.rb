class AddEventsToCharacter < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :events, :text
  end
end
