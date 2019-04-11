Rails.application.routes.draw do
  resources :books

  namespace :api, defaults: {format: :json} do
    resources :swagger, only: [:index] unless Rails.env.production?

    resources :books, except: [:new, :edit]
  end
end
