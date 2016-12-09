# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

launch = Path.create!(name: "launch", destination: "/bnb");

launch.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
launch.slides.create!(name: "third slide", content: File.read("db/data/second_launch_slide.html"));
launch.slides.create!(name: "fourth slide", content: File.read("db/data/third_launch_slide.html"));
launch.slides.create!(name: "third slide", content: File.read("db/data/third_launch_slide.html"));



signup = Path.create!(name: "sign up", destination: "/users/sign_up");

signup.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
signup.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));
signup.slides.create!(name: "third slide", content: File.read("db/data/first_launch_slide.html"));
signup.slides.create!(name: "fourth slide", content: File.read("db/data/first_launch_slide.html"));

signupSubmit = Path.create!(name: "sign up submit", destination: "");

signupSubmit.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
signupSubmit.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));
signupSubmit.slides.create!(name: "third slide", content: File.read("db/data/first_launch_slide.html"));
signupSubmit.slides.create!(name: "fourth slide", content: File.read("db/data/first_launch_slide.html"));


logout = Path.create!(name: "sign up", destination: File.read("db/data/first_launch_slide.html"));

logout.slides.create!(name: "first slide", content: File.read("db/data/first_launch_slide.html"));
logout.slides.create!(name: "second slide", content: File.read("db/data/first_launch_slide.html"));
logout.slides.create!(name: "third slide", content: File.read("db/data/first_launch_slide.html"));
logout.slides.create!(name: "fourth slide", content: File.read("db/data/first_launch_slide.html"));





















