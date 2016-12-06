# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

launch = Path.create!(name: "launch", destination: "/bnb");

launch.slides.create!(name: "first slide", content: "Rails.application.routes.draw do

root 'main#show'

resources :bnb

scope '/api' do
	resources :paths
end

end")

launch.slides.create!(name: "second slide", content:"class MainController < ApplicationController


	def show
		@destination = Path.first.destination
		render :home
	end
end
")
launch.slides.create!(name: "third slide", content: "
<%= render partial: 'shared/header' %>

<div class='slider'>
	
</div>

<div class='content'>
	<h4>Bookings</h4>

	<div class='listings'>
	   <div class='table'>

        <div class='listing'>
        	<div class='img'></div>
            <h3>Project Title</h3>
        </div>

        <div class='listing'>
            <div class='img'></div>
            <h3>Project Title</h3>
        </div>

        <div class='listing'>
            <div class='img'></div>
            <h3>Project Title</h3>
        </div>


        <div class='listing'>
            <div class='img'></div>
            <h3>Project Title</h3>
        </div>

        <div class='listing'>
            <div class='img'></div>
            <h3>Project Title</h3>
        </div>


        <div class='listing'>
            <div class='img'></div>
            <h3>Project Title</h3>
        </div>

        
   		 </div>
		
	</div>
</div>
")
launch.slides.create!(name: "fourth slide", content: "This is the fourth shit blah blah blah")
