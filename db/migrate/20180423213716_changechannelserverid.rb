class Changechannelserverid < ActiveRecord::Migration[5.1]
  def change
    remove_index :channels, :server_id
    add_index :channels, :server_id
  end
end
