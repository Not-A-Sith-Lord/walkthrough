class PathsController < ApplicationController

	def show
		path = Path.find(params[:id])
		render json: path.slides
	end
end
