import sleep from '@/utils/sleep'

export default async function (arr, context, velocity = 0) {
  for (let i = 1; i < arr.length; i++) {
    let target = arr[i]
    let j = i
    for (; j > 0; j--) {
      await sleep(velocity)
      if (arr[j - 1] > target) {
        context.$set(arr, j, arr[j - 1])
      } else {
        break
      }
    }
    context.$set(arr, j, target)
    await sleep(velocity)
  }
}
