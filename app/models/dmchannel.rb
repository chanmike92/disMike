class Dmchannel < ApplicationRecord

  has_many :subscriptions,
    class_name: :Dmsubscriber,
    primary_key: :id,
    foreign_key: :dm_id

  has_many :subscribers,
    through: :subscriptions,
    source: :user

  has_many :messages, as: :messagable, dependent: :destroy


  def channel_name?(current_user)
    name = []
    self.subscribers.each do |subscriber|
      if subscriber.username != current_user.username
        name << subscriber.username
      end
    end
    name.join(", ")
  end

  def receivers?(current_user)
    ids = []
    self.subscribers.each do |subscriber|
      if subscriber.id != current_user.id
        ids << subscriber.id
      end
    end
    ids
  end

  def subscribed?(current_user)
    self.subscriptions.find_by(user_id: current_user.id).subscribed
  end

  def subscribe

  end

  def unsubscribe

  end

end
