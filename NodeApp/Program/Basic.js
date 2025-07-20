//1. Longest word in sentance

const sentance = 'this is the sentance'
const longestWord = sentance.split(' ').reduce((acc, curr) => {
  return acc.length <= curr.length ? curr : acc
})
console.log('1.', longestWord)

//2. Palindrome

var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  if (s.length < 2) return true
  for (let i = 0; i <= s.length / 2; i++) {
    if (s[i] != s[s.length - i - 1]) return false
  }
  return true
}
console.log('2. Palindrome', isPalindrome('malayalam'))

//3. Remove Duplicate
const a = [1, 2, 4, 2, 4, 5, 2, 5, 3, 2, 7]
console.log('3.', [...new Set(a)])

//4. Revese a string without buit-in
const reverse = 'ananth'.split('')
let reverseAns = ''
for (let i = reverse.length - 1; i >= 0; i--) {
  reverseAns += reverse[i]
}
// for (let i = 0; i < reverse.length / 2; i++) {
//   ;[reverse[i], reverse[reverse.length - 1 - i]] = [
//     reverse[reverse.length - 1 - i],
//     reverse[i],
//   ]
// }
console.log('reverse', reverseAns)

//5. consecutive count done leet code 1446

//6.factorial of a given number

var factorial = function (n) {
  if (n == 0 || n == 1) return 1
  return n * factorial(n - 1)
}
console.log('factorial ', factorial(5))

// 7. Merge sorted array

let arr1 = [0, 3, 4, 31]
let arr2 = [4, 6, 30]
let j = arr2.length - 1
arr1 = arr1.concat(new Array(arr2.length).fill(0))
let i = arr1.length - arr2.length - 1
let k = arr1.length - 1
while (j >= 0) {
  if (i >= 0 && arr1[i] > arr2[j]) {
    arr1[k--] = arr1[i--]
  } else {
    arr1[k--] = arr2[j--]
  }
}
console.log('7.merge sorted array', arr1)

// 8. perfect square available or not
const a1 = [2, 3, 4, 5, 6, 3, 2]
const a2 = [9, 4, 16, 25, 36, 9, 4]
/*const isPerfectSquareAvailable = function (arr1, arr2) {
  if (arr1.length != arr2.length) return false
  return arr1.every((val) => {
    if (arr2.includes(val * val)) {
      const index = arr2.indexOf(val * val)
      arr2.splice(index, 1)
      return true
    } else {
      return false
    }
  })
}
console.log('is perfect', isPerfectSquareAvailable(a1, a2))*/

// using map
const isPerfectSquareAvailableMap = function (arr1, arr2) {
  const freqMap = new Map()
  for (const a of arr2) {
    if (freqMap.has(a)) {
      freqMap.set(a, freqMap.get(a) + 1)
    } else {
      freqMap.set(a, 1)
    }
  }
}

isPerfectSquareAvailableMap(a1, a2)

//anagram
const anagram = (s, t) => {
  const freq = new Uint16Array(26).fill(0)
  s.split('').forEach((val, index) => freq[s.charCodeAt(index) - 97]++)
  t.split('').forEach((val, index) => freq[t.charCodeAt(index) - 97]--)
  console.log(freq)
  return freq.every((val) => val == 0)
}

console.log('is anagram', anagram('varun', 'arunv'))

//unique Object
const obj = [
  { name: 'sai' },
  { name: 'Nang' },
  { name: 'sai' },
  { name: 'Nang' },
  { name: '111111' },
  { name: 'sai' },
  { name: 'Nang' },
  { name: '111111' },
]

const uniqueObjects = function (lists) {
  const set = new Set()
  return lists.filter((obj) => {
    if (set.has(obj.name)) {
      return false
    } else {
      set.add(obj.name)
      return true
    }
  })
}
// console.log('Unique Objects ', uniqueObjects(obj))

const uniqueObjects1 = function (lists) {
  return lists.filter((val, index, arr) => {
    if (arr.findIndex((o) => o.name == val.name) == index) return true
    else false
  })
}

console.log('Unique element ', uniqueObjects1(obj))

// max in an array with Math.max

let nums = [3, 4, 5, 7, 3, 6, 8, 42]

// console.log('max val', Math.max(...nums))

const maxValue = function (nums) {
  return nums.reduce((acc, curr) => (curr > acc ? curr : acc))
}
console.log('max val', maxValue(nums))

// Max in 2d array

const flat = [
  [3, 4, 58],
  [709, 8, 9],
  [[4, 5, 6], 11],
  [111, 2],
]

console.log('max value in the flat', Math.max(...flat.flat(Infinity)))

// mapping problem

const data = [
  { name: 'Alice', subjects: ['Math', 'Physics'] },
  { name: 'Bob', subjects: ['Math', 'Chemistry'] },
  { name: 'Charlie', subjects: ['Physics'] },
]
// Expected[
//   ({ subject: 'Math', students: ['Alice', 'Bob'] },
//   { subject: 'Physics', students: ['Alice', 'Charlie'] },
//   { subject: 'Chemistry', students: ['Bob'] })
// ]
const map = new Map()

data.forEach(({ name, subjects }) => {
  subjects.forEach((sub) => {
    const temp = map.get(sub) || []
    temp.push(name)
    map.set(sub, temp)
  })
})
//with object insted of map
let modified = {}
data.forEach(({ name, subjects }) => {
  subjects.forEach((sub) => {
    const temp = modified[sub] || []
    temp.push(name)
    modified[sub] = temp
  })
})

// console.log(
//   Object.entries(modified).map(([subject, students]) => ({
//     subject,
//     students,
//   }))
// )

///
let subjects = [...new Set(data.flatMap((item) => item.subjects))]
subjects = subjects.map((sub) => ({
  subject: sub,
  students: data
    .filter((student) => student.subjects.includes(sub))
    .map((su) => su.name),
}))

console.log(subjects)
