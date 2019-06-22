Rails.application.routes.draw do
  resources :books

  match 'app/(*spa_path)' => 'spa_app#index', via: :get, as: 'spa_app'
  
  namespace :api, defaults: {format: :json} do
    resources :swagger, only: [:index] unless Rails.env.production?

    resources :books, except: [:new, :edit]
  end
end
