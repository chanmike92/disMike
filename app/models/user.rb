class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :email, email: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :image, default_url: "dismike-logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

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
    foreign_key: :friend1

  has_many :friends,
    through: :friendship,
    source: :friend

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

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
