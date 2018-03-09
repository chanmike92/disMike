class Server < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :owner_id, presence: true

  belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id

  has_many :subscriptions,
    class_name: :Serversubscription,
    primary_key: :id,
    foreign_key: :server_id

  has_many :subscribed_users,
    through: :subscriptions,
    source: :user

  has_many :channels,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :server_id
end
