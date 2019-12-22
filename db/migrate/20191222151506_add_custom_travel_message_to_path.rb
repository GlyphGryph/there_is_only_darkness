class AddCustomTravelMessageToPath < ActiveRecord::Migration[6.0]
  def change
    add_column :paths, :custom_travel_message, :text
  end
end
