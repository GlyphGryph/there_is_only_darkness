class AddActivityModifiersToRegion < ActiveRecord::Migration[6.0]
  def change
    add_column :regions, :activity_modifiers, :text
  end
end
