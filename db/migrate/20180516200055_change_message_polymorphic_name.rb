class ChangeMessagePolymorphicName < ActiveRecord::Migration[5.1]
  def change
    remove_index :messages, column: [:message_id, :message_type]
    remove_index :messages, column: [:author_id, :message_id, :message_type]
      remove_column :messages, :message_id
      remove_column :messages, :message_type


      add_column :messages, :messagable_id, :integer, null: false
      add_column :messages, :messagable_type, :string, null: false

      add_index :messages, [:messagable_id, :messagable_type]
      add_index :messages, [:author_id, :messagable_id, :messagable_type], unique: true, name: 'index_on_user_and_messages'

  end
end
