class CreateServerchannels < ActiveRecord::Migration[5.1]
  def change
    create_table :serverchannels do |t|
      t.integer :server_id
      t.integer :channel_id

      t.timestamps
    end
  end
end
