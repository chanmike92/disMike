class AddOnlineStatustoUsersandRemoveImageUrl < ActiveRecord::Migration[5.1]
  def change

    remove_column :servers, :img_url, :string
    remove_column :users, :img_url, :string
    add_column :users, :online_status, :boolean, null: false
    add_column :friendships, :friendship_status, :string, null: false
  end
end
