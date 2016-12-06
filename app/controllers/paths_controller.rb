class PathsController < ApplicationController

	def show
		path = Path.find(params[:id])
		slides = path.slides
		render json: path.to_json( include: :slides)
	end
end
