class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :email, email: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" },
  default_url: "discord-user-icon-1.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  # validates :image, attachment_presence: true
  # validates_with AttachmentPresenceValidator, attributes: :image
  # validates_with AttachmentSizeValidator, attributes: :image, less_than: 1.megabytes

  after_initialize :ensure_session_token
  after_create :set_default_profile_picture

  has_many :owned_servers,
    class_name: :Server,
    primary_key: :id,
    foreign_key: :owner_id

  has_many :subscriptions,
    class_name: :Serversubscription,
    primary_key: :id,
    foreign_key: :user_id

  has_many :subscribed_servers,
    through: :subscriptions,
    source: :server

  has_many :messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :author_id

  has_many :friendships,
    class_name: :Friendship,
    primary_key: :id,
    foreign_key: :friend1,
    dependent: :destroy

  has_many :friends,
    through: :friendships,
    source: :friend

  has_many :possiblefriends,
    through: :friends,
    source: :friendship

  has_many :dmsubscriptions,
    class_name: :Dmsubscriber,
    primary_key: :id,
    foreign_key: :user_id,
    dependent: :destroy

  has_many :dmchannels,
    through: :dmsubscriptions,
    source: :dmchannel

  has_many :companions,
    through: :subscribed_servers,
    source: :subscribed_users

  has_many :subscribed_channels,
    through: :subscribed_servers,
    source: :channels

  has_many :dmusers,
    through: :dmchannels,
    source: :subscribers

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    bcrypt_pw = BCrypt::Password.new(self.password_digest)
    bcrypt_pw.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def set_default_profile_picture
    default = ["app/assets/images/discord-user-icon-1.png",
      "app/assets/images/discord-user-icon-2.png",
      "app/assets/images/discord-user-icon-3.png",
      "app/assets/images/discord-user-icon-4.png"
    ].sample
    # image_file = File.new(default)
    #
    #
    # self.image = ActionDispatch::Http::UploadedFile.new(
    #     :filename => File.basename(image_file),
    #     :tempfile => image_file,
    #     :contenttype => "image/png",
    #   )
    # self.image = image_file
    img = File.open(File.join(Rails.root, default))
    self.update(image: img)
  end

  def acquaintances
    (self.friends + self.dmusers + self.companions).uniq
  end

  def find_direct_dm(user)
    dm = self.dmchannels.find {|dm| ((dm.subscribers.map(&:id)) & [user.id, self.id]).length == 2}
    debugger
    if dm
      return dm.id
    else
      nil
    end
  end

  def reset_profile_picture
    img = File.open(File.join(Rails.root, "app/assets/images/discord-user-icon-1.png"))
    self.update(image: img)
  end

  def search

  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
