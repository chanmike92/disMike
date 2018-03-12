class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true

  belongs_to :channel,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :channel_id

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

end
