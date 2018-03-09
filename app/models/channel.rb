class Channel < ApplicationRecord
  validates :name, :server_id, presence: true
  validates :server_id

  belongs_to :server,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :server_id
end
