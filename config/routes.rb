Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    post 'world/create', to: 'worlds#create'
    post 'world/destroy', to: 'worlds#destroy'
    post 'activity/select', to: 'activities#select'
  end

  get '*page', to:'pages#index', constrains: ->(req)do
    !req.xhr && req.format.html?
  end
end
