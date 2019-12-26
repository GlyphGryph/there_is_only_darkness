Rails.application.routes.draw do
  devise_for :users
  root 'react#index'

  namespace :api, defaults: { format: 'json' } do
    post 'world/create', to: 'worlds#create'
    post 'world/destroy', to: 'worlds#destroy'
    post 'activity/select', to: 'activities#select'
    post 'page/turn', to: 'pages#turn'
  end

  get '*react', to:'react#index', constrains: ->(req)do
    !req.xhr && req.format.html?
  end
end
