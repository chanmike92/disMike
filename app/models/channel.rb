class Channel < ApplicationRecord
  validates :name, presence: true

  has_many :messages, dependent: :destroy,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :channel_id

  belongs_to :servers,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :server_id
end
