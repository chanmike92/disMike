class Serverchannel < ApplicationRecord

  validates :channel_id, :server_id, presence: true
  validates :channel_id, uniqueness: { scope: :server_id }

  belongs_to :channel,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :channel_id

  belongs_to :server,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :server_id

end
