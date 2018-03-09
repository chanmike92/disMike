class Channel < ApplicationRecord
  validates :name, :server_id, presence: true

  belongs_to :server,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :server_id
end
