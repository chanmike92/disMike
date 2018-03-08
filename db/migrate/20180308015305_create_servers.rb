class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.string :img_url
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :servers, :name, unique: true
  end
end
