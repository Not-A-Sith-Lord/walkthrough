# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

launch = Path.create!(name: "launch")

launch.slides.create!(name: "first slide", content: "<p>Rails.application.routes.draw do</p><br><br>

<p>root 'main#show'</p><br><br>

<p>resources :bnb</p><br><br>

<p>scope '/api' do</p><br>
	<p>resources :paths</p><br>
<p>end</p><br><br>

<p>end</p>")

launch.slides.create!(name: "second slide", content: "<p>class MainController < ApplicationController</p><br><br>


	<p>def show</p>
	<br><br>

		<p>render :home</p><br>
	<p>end</p><br>
<p>end</p>
")
launch.slides.create!(name: "third slide", content: "

")
launch.slides.create!(name: "fourth slide", content: "This is the fourth shit blah blah blah")
