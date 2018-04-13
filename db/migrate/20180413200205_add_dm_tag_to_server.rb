class AddDmTagToServer < ActiveRecord::Migration[5.1]
  def change
    add_column :servers, :is_dm, :boolean
  end
end
