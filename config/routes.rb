Rails.application.routes.draw do
  #how to fix the routes to here for root
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :friendships, only: [:index, :create, :update, :show, :destroy]
    resources :dms, only: [:index, :create, :show, :update, :destroy]
    post 'servers/join', to: 'servers#join'
    post 'servers/leave', to: 'servers#leave'
    post 'users/payload', to: 'users#payload'
    resources :channels, only: [:index, :create, :show, :update, :destroy]
    resources :messages, only: [:index, :create]
  end

  # mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
