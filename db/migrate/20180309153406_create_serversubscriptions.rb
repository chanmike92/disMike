class CreateServersubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :serversubscriptions do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
    add_index :serversubscriptions, [:user_id, :server_id], unique: true
  end
end
