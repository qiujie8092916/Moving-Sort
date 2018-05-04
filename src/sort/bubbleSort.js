import sleep from '@/utils/sleep'

export default async function (arr, context, velocity = 0) {
  for (let i = 0; i < arr.length; i++) {
    await sleep(velocity)
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        context.$set(arr, j, arr[j + 1])
        context.$set(arr, j + 1, temp)
      }
      await sleep(velocity)
    }
  }
}