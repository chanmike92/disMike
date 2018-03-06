class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :login
  helper_method :current_user
  helper_method :logged_in?
  helper_method :ensure_logged_in

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def ensure_logged_in
    render json: {error: ["Must be logged in"]}, status: 401 unless logged_in?
  end
end
