class AddMessagePolymorphism < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :message_id, :integer, null: false
    add_column :messages, :message_type, :string, null: false

    add_index :messages, [:message_id, :message_type]
    add_index :messages, [:author_id, :message_id, :message_type], unique: true
    remove_column :messages, :channel_id, :integer
  end
end
