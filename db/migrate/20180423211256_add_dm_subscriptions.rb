class AddDmSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :dmsubscribers do |t|
      t.integer :dm_id, null: false
      t.integer :user_id, null: false
      t.boolean :subscribed, null: false
      t.timestamps
    end
  end
end
