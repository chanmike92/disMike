class AddDmChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :dmchannels do |t|
      t.timestamps
    end
  end
end
