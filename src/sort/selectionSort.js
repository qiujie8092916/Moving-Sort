import sleep from '@/utils/sleep'

export default async function (arr, context, velocity = 0) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      await sleep(velocity)
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let temp = arr[i]
    context.$set(arr, i, arr[minIndex])
    context.$set(arr, minIndex, temp)
  }
}
