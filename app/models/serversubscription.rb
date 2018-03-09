class Serversubscription < ApplicationRecord
  validates :user_id, :server_id, presence: true
  validates :user_id, uniqueness: { scope: :server_id }

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :server,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :server_id

end
