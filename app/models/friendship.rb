class Friendship < ApplicationRecord
  validates :friend1, :friend2, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :friend1

  belongs_to :friend
    class_name: :User
    primary_key: :id
    foreign_key: :friend2

end
