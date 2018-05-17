class Channel < ApplicationRecord
  validates :name, presence: true

  has_many :messages, as: :messagable, dependent: :destroy

  belongs_to :server,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :server_id
end
