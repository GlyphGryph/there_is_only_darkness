class AddWorldIdToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :world, null: true, foreign_key: true
  end
end
