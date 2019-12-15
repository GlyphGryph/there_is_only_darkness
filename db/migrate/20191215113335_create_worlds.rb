class CreateWorlds < ActiveRecord::Migration[6.0]
  def change
    create_table :worlds do |t|
      t.integer :turn

      t.timestamps
    end
  end
end
