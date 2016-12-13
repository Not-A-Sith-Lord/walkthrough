# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create!(name: "Luke Skywalker", password: "password", password_confirmation: "password", email: "luke@skywalker.com");
Listing.create!(name: "Quaint Moisture Farm", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm1", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm2", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm3", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm4", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm5", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm6", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");





# Start slide is resting routes
launch = Path.create!(name: "launch", destination: "/bnb"); #1

#same initial slide
launch.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
# Highlight "root" line
launch.slides.create!(name: "second slide", content: File.read("db/data/second_launch_slide.html"));
# Emphasize controller, and action
launch.slides.create!(name: "third slide", content: File.read("db/data/third_launch_slide.html"));
#Go to controller, emphasize corrosponding name and action
#launch.slides.create!(name: "fourth slide", content: File.read("db/data/fourth_launch_slide.html"));
#emphasize database variables
#launch.slides.create!(name: "third slide", content: File.read("db/data/fourth_launch_slide.html"));
#emphasize render
launch.slides.create!(name: "fourth slide", content: File.read("db/data/fourth_launch_slide.html"));


#initial view with corresponding elements
signIn = Path.create!(name: "sign in", destination: "/users/sign_in"); #2

signIn.slides.create!(name: "first slide", content: File.read("db/data/first_login_slide.html"));
# Highlight "root" line
signIn.slides.create!(name: "second slide", content: File.read("db/data/second_login_slide.html"));
# Emphasize controller, and action
signIn.slides.create!(name: "third slide", content: File.read("db/data/third_login_slide.html"));
#replace with routes and "http request" link to the server
# #highlight corresponding controller and action 
# signIn.slides.create!(name: "second slide", content: File.read("db/data/second_launch_slide.html"));
#show "sessions" controller and emphasize corresponding controller name and action
#show params searching database
#show params jumping to home redirect if successful 

signInSubmit = Path.create!(name: "sign in", destination: "/users/sign_in"); #3


signInSubmit.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
# Highlight "root" line
signInSubmit.slides.create!(name: "second slide", content: File.read("db/data/second_launch_slide.html"));
# Emphasize controller, and action
signInSubmit.slides.create!(name: "third slide", content: File.read("db/data/third_launch_slide.html"));

signUp = Path.create!(name: "sign up", destination: "/users/sign_up"); #4

signUp.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
signUp.slides.create!(name: "second slide", content: File.read("db/data/second_launch_slide.html"));
signUp.slides.create!(name: "third slide", content: File.read("db/data/third_launch_slide.html"));
signUp.slides.create!(name: "fourth slide", content: File.read("db/data/second_launch_slide.html"));

signUpSubmit = Path.create!(name: "sign up submit", destination: ""); #5

signUp.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
# Highlight "root" line
signUp.slides.create!(name: "second slide", content: File.read("db/data/second_launch_slide.html"));
# Emphasize controller, and action
signUp.slides.create!(name: "third slide", content: File.read("db/data/third_launch_slide.html"));



signOut = Path.create!(name: "sign out", destination: "/users/sign_out"); #6

signOut.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));



















