class Server < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :owner_id, presence: true
  belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id
end
