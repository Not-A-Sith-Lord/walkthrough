# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

launch = Path.create!(name: "launch")

launch.slides.create!(name: "first slide", content: "This is the first shit blah blah blah")

launch.slides.create!(name: "second slide", content: "This is the second shit blah blah blah")
launch.slides.create!(name: "third slide", content: "This is the third shit blah blah blah")
launch.slides.create!(name: "fourth slide", content: "This is the fourth shit blah blah blah")
