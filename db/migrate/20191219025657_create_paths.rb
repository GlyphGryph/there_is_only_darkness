class CreatePaths < ActiveRecord::Migration[6.0]
  def change
    create_table :paths do |t|
      t.references :source, foreign_key: {to_table: :regions}
      t.references :destination, foreign_key: {to_table: :regions}
      t.references :world
      t.string :name_one
      t.string :name_two

      t.timestamps
    end
  end
end
