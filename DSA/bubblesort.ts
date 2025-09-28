function bubbleSort(array: number[]) {
  let swapped: boolean
  let length = array.length
  do {
    swapped = false
    for (let i = 0; i < length - 1; i++) {
      if (array[i] > array[i + 1]) {
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
      }
    }
    console.log('array at end ', array)
    length--
  } while (swapped)
  return array
}

console.log(
  'Bubble sort [-2,4,-5,4,2,6,1,-1,0] :  ',
  bubbleSort([-2, 4, -5, 4, 2, 6, 1, -1, 0])
)
