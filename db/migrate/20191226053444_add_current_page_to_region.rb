class AddCurrentPageToRegion < ActiveRecord::Migration[6.0]
  def change
    add_column :regions, :current_page, :integer, default: 0, null: false
  end
end
