class RemoveIndexFromMessages < ActiveRecord::Migration[5.1]
  def change
    remove_index :messages, name: 'index_on_user_and_messages'
    add_index :messages, [:author_id, :messagable_id, :messagable_type], name: 'index_on_user_and_messages'
  end
end
