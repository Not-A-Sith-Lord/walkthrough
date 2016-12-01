Rails.application.routes.draw do

root "main#show" 

resources :bnb

scope "/api" do
	resources :paths
end

end
