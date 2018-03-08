class Server < ApplicationRecord
  validates :name, presence: true, unique: true
end
