class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.string :name
      t.string :planet
      t.decimal :price
      t.string :description

      t.timestamps
    end
  end
end
