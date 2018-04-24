class RemoveServerChannels < ActiveRecord::Migration[5.1]
  def change
    drop_table :serverchannels
    add_column :channels, :server_id, :integer
    add_index :channels, :server_id, unique: true
    remove_column :servers, :is_dm, :boolean

  end
end
