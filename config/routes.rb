Rails.application.routes.draw do

  get 'messages/index'

  get 'messages/create'

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :channels, only: [:index, :create, :show, :update, :destroy]
    resource :messages, only: [:index, :create]
    post '/servers/join', to: "servers#join"
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
