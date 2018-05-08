class Dmsubscriber < ApplicationRecord
  validates :dm_id, :user_id, presence: true
  validates :subscribed, inclusion: { in: [true, false] }

  belongs_to :dmchannel,
    class_name: :Dmchannel,
    primary_key: :id,
    foreign_key: :dm_id

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

end
