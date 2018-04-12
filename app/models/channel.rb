class Channel < ApplicationRecord
  validates :name, presence: true

  has_many :messages, dependent: :destroy,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :channel_id

  has_many :serversub, dependent: :destroy,
    class_name: :Serverchannel,
    primary_key: :id,
    foreign_key: :channel_id

  has_many :servers,
    through: :serversub,
    source: :server
end
