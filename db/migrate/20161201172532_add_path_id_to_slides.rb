class AddPathIdToSlides < ActiveRecord::Migration[5.0]
  def change
    add_column :slides, :path_id, :integer
  end
end
