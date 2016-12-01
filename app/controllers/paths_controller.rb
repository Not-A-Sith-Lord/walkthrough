class PathsController < ApplicationController

	def index
		path = Path.all
		render json: path
	end
end
