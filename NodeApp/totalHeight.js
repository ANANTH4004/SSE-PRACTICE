const persons = [
  {
    name: 'anand',
    age: 24,
  },
  {
    name: 'varun',
    age: 44,
  },
  ,
  {
    name: 'kannan',
    age: 34,
  },
  {
    name: 'nithya',
    age: 24,
  },
]

let count = 0

persons.forEach((person) => {
  count += person.age
})

console.log(count)

////////////////////////////////////////////////

const schoolData = [
  {
    class: 'Math',
    students: [
      { name: 'Alice', grade: 90, activities: ['Chess', 'Debate'] },
      { name: 'Bob', grade: 80, activities: ['Soccer', 'Debate'] },
    ],
  },
  {
    class: 'Science',
    students: [
      { name: 'Charlie', grade: 85, activities: ['Chess', 'Drama'] },
      { name: 'Diana', grade: 95, activities: ['Soccer', 'Drama'] },
    ],
  },
]

const avgData = schoolData.map((data) => {
  const avg =
    data.students.reduce((acc, curr) => (acc += curr.grade), 0) /
    data.students.length
  console.log(avg)
  return { class: data.class, avg: avg }
})

console.log(avgData)
////////////////////////

const Words = 'My name is anand and i am a good boy'

const minWord = Words.split(' ').reduce((word, curr) => {
  return word.length <= curr.length ? word : curr
})
console.log(minWord)
