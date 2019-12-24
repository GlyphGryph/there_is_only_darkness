class AddBookToRegion < ActiveRecord::Migration[6.0]
  def change
    add_column :regions, :book, :text
  end
end
