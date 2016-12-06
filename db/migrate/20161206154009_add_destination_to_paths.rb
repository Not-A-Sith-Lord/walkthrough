class AddDestinationToPaths < ActiveRecord::Migration[5.0]
  def change
    add_column :paths, :destination, :string
  end
end
