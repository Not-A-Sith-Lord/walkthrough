Rails.application.routes.draw do

  

root "main#show" 

devise_for :users
resources :bnb

scope "/api" do
	resources :paths
end

end
