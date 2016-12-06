class MainController < ApplicationController


	def show
		@destination = Path.first.destination
		render :home
	end
end
