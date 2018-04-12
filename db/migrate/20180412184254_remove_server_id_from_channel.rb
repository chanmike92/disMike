class RemoveServerIdFromChannel < ActiveRecord::Migration[5.1]
  def change
    remove_index :channels, :server_id
    remove_column :channels, :server_id, :integer
    change_column_null :serverchannels, :server_id, false
    change_column_null :serverchannels, :channel_id, false
    add_index :serverchannels, [:channel_id, :server_id], unique: true
  end
end
