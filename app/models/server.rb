class Server < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :owner_id, presence: true
  validates :is_dm, inclusion: { in: [true, false]}

  belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id

  has_many :subscriptions, dependent: :destroy,
    class_name: :Serversubscription,
    primary_key: :id,
    foreign_key: :server_id

  has_many :channelsubs, dependent: :destroy,
    class_name: :Serverchannel,
    primary_key: :id,
    foreign_key: :server_id

  has_many :subscribed_users, dependent: :destroy,
    through: :subscriptions,
    source: :user

  has_many :channels, dependent: :destroy,
    through: :channelsubs,
    source: :channel
end
