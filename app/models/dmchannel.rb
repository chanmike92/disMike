class Dmchannel < ApplicationRecord

  has_many :subscriptions,
    class_name: :Dmsubscriber,
    primary_key: :id,
    foreign_key: :dm_id

  has_many :subscribers,
    through: :subscriptions,
    source: :user

  has_many :messages, as: :messagable, dependent: :destroy


  def channel_name?(user)
    names = []
    self.subscribers.each do |subscriber|
      if subscriber.username != user.username
        names << subscriber.username
      end
    end
    names.join(", ")
  end

  def receivers(user)
    ids = []
    self.subscribers.each do |subscriber|
      if subscriber.id != user.id
        ids << subscriber.id
      end
    end
    ids
    # subscribers = self.subscribers.pluck(:id)
    # subscribers.delete(user.id)
    # subscribers
  end

  def find_subscriptions(user)
    self.subscriptions.find_by(user_id: user.id)
  end

  def self.find_direct_dm(user)
    current_user.dmchannels.find {|dm| ((dm.subscribers.map(&:id)) & [user.id, current_user.id]).length == 2}
  end

  def subscribed?(user)

    self.find_subscriptions(user).subscribed
  end

  def subscribe(user)

    self.find_subscriptions(user).update(subscribed: true)
  end

  def unsubscribe(user)
   self.find_subscriptions(user).update(subscribed: false)
  end

end
