class Dmchannel < ApplicationRecord

  has_many :subscriptions,
    class_name: :Dmsubscriber,
    primary_key: :id,
    foreign_key: :dm_id

  has_many :subscribers,
    through: :subscriptions,
    source: :user

  has_many :messages, as: :messagable, dependent: :destroy


  def channel_name(current_user)
    name = [];
    self.subscribers.each do |subscriber|
      if subscriber.username != current_user.username
        name << subscriber.username
      end
    end
    name.join(", ")
  end

  def unsubscribe

  end

end
