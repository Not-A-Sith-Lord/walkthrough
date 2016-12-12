class BnbController < ApplicationController


	def index

		@listings = Listing.all
		@listing_sample = @listings[0..6]

		render :home
	end

	
end
