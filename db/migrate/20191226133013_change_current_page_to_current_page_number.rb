class ChangeCurrentPageToCurrentPageNumber < ActiveRecord::Migration[6.0]
  def change
    rename_column :regions, :current_page, :current_page_number
  end
end
