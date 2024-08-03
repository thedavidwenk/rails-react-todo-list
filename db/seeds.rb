puts "delete all existing todo's"

Todo.destroy_all

puts "creating new todo's"

20.times do
  Todo.create(
    title: Faker::Lorem.sentence(word_count: 3),
    body: Faker::Lorem.paragraph(sentence_count: 2)
  )
end

puts "done!"