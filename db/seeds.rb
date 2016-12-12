# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create!(name: "Luke Skywalker", password: "password", password_confirmation: "password", email: "a@a.com");
Listing.create!(name: "Quaint Moisture Farm", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm1", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm2", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm3", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm4", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm5", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");
Listing.create!(name: "Quaint Moisture Farm6", planet: "Tatooine", price: 50, description: "A nice underground hut in the middle of the desert");






launch = Path.create!(name: "launch", destination: "/bnb"); #1

launch.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
launch.slides.create!(name: "third slide", content: File.read("db/data/second_launch_slide.html"));
launch.slides.create!(name: "fourth slide", content: File.read("db/data/third_launch_slide.html"));
launch.slides.create!(name: "third slide", content: File.read("db/data/third_launch_slide.html"));



signUp = Path.create!(name: "sign up", destination: "/users/sign_up"); #2

signUp.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
signUp.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));
signUp.slides.create!(name: "third slide", content: File.read("db/data/first_launch_slide.html"));
signUp.slides.create!(name: "fourth slide", content: File.read("db/data/first_launch_slide.html"));

signUpSubmit = Path.create!(name: "sign up submit", destination: ""); #3

signUpSubmit.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
signUpSubmit.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));
signUpSubmit.slides.create!(name: "third slide", content: File.read("db/data/first_launch_slide.html"));
signUpSubmit.slides.create!(name: "fourth slide", content: File.read("db/data/first_launch_slide.html"));

signIn = Path.create!(name: "sign in", destination: "/users/sign_in"); #4

signIn.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
signIn.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));

logout = Path.create!(name: "sign up", destination: File.read("db/data/first_launch_slide.html")); #5

logout.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
logout.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));
logout.slides.create!(name: "third slide", content: File.read("db/data/first_launch_slide.html"));
logout.slides.create!(name: "fourth slide", content: File.read("db/data/first_launch_slide.html"));

signOut = Path.create!(name: "sign out", destination: "/users/sign_out"); #6

signOut.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));



















