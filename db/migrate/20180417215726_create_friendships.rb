class CreateFriendships < ActiveRecord::Migration[5.1]
  def change
    create_table :friendships do |t|
      t.integer :friend1, null: false
      t.integer :friend2, null: false
      t.timestamps
    end

    add_index :friendships, [:friend1, :friend2], unique: true
  end
end
