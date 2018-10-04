class Channel < ApplicationRecord
  validates :name, presence: true

  has_many :messages, as: :messagable, dependent: :destroy

  belongs_to :server,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :server_id

  has_many :subscribers,
    through: :server,
    source: :subscribed_users

  has_many :subscriptions,
    through: :server,
    source: :subscriptions

  def unread_messages(user)
    #TODO
    # self.messages.where( )
  end
end
