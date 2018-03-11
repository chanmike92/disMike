class Channel < ApplicationRecord
  validates :name, :server_id, presence: true

  belongs_to :server,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :server_id

  has_many :messages, dependent: :destroy,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :channel_id
end
