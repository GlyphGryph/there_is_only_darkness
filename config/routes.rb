Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end

  get '*page', to:'pages#index', constrains: ->(req)do
    !req.xhr && req.format.html?
  end
end
