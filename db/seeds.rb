# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

launch = Path.create!(name: "launch", destination: "/bnb");

launch.slides.create!(name: "first slide", content: "
<div class='item active'>
	<div class='heading'>
		<h3>Rails Routes</h3>
		<h4>AKA the internal directory</h4>
	</div>

                    <div class='carousel-content'>
                        <pre>
                        	<code class='language-ruby'>
Rails.application.routes.draw do

	root 'main#show'

	resources :bnb

	scope '/api' do
		resources :paths
	end

end
 </code>
                        </pre>
                    </div>
                </div>");

launch.slides.create!(name: "second slide", content:"
	<div class='item'>
	<div class='heading'>
		<h3>Rails Routes</h3>
		<h4>URL request matches defined route</h4>
	</div>
                    <div class='carousel-content'>
                        <pre data-line='5'>
                        	<code class='language-ruby' >
Rails.application.routes.draw do

	root 'main#show'

	resources :bnb

	scope '/api' do
		resources :paths
	end

end
 </code>
                        </pre>
                    </div>
                </div>
")

launch.slides.create!(name: "third slide", content:"
<div class='item'>
	<div class='heading'>
		<h3>Main Controller</h3>
		<h4>Program is routed to controller called 'main'</h4>
	</div>
                    <div class='carousel-content'>
                        <pre>
                        	<code class='language-ruby' >

	class MainController < ApplicationController


	def show
		@destination = Path.first.destination
		render :home
	end
end


 </code>
                        </pre>
                    </div>
                </div>
");

launch.slides.create!(name: "fourth slide", content:"
<div class='item'>
                    <div class='carousel-content'>
                        <pre data-line='9'>
                        	<code class='language-ruby' >

	class MainController < ApplicationController


	def show
		@destination = Path.first.destination
		render :home
	end
end


 </code>
                        </pre>
                    </div>
                </div>
")

launch.slides.create!(name: "third slide", content: "
	<div class='item'>
                    <div class='carousel-content'>
                        <pre>
        <code class='language-markup' >
&lt;%= render partial: 'shared/header' %>

 &lt;div class='slider'>
	
 &lt;/div>

 &lt;div class='content'>
	 &lt;h4>Bookings &lt;/h4>

	 &lt;div class='listings'>
	    &lt;div class='table'>

         &lt;div class='listing'>
        	 &lt;div class='img'> &lt;/div>
             &lt;h3>Project Title &lt;/h3>
         &lt;/div>

         &lt;div class='listing'>
             &lt;div class='img'> &lt;/div>
             &lt;h3>Project Title &lt;/h3>
         &lt;/div>

         &lt;div class='listing'>
             &lt;div class='img'> &lt;/div>
             &lt;h3>Project Title &lt;/h3>
         &lt;/div>


         &lt;div class='listing'>
             &lt;div class='img'> &lt;/div>
             &lt;h3>Project Title &lt;/h3>
         &lt;/div>

         &lt;div class='listing'>
             &lt;div class='img'> &lt;/div>
             &lt;h3>Project Title &lt;/h3>
         &lt;/div>


         &lt;div class='listing'>
             &lt;div class='img'> &lt;/div>
             &lt;h3>Project Title &lt;/h3>
         &lt;/div>

        
   		  &lt;/div>
		
	&lt;/div>
&lt;/div>


 </code>
                        </pre>
                    </div>
                </div>
");
