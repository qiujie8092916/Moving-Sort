import sleep from '@/utils/sleep'
const { floor } = Math
export default async function (arr, context, velocity = 0) {
  for (let gap = floor(arr.length / 2); gap > 0; gap = floor(gap / 2)) {
    await sleep(velocity)
    for (let i = gap; i < arr.length; i++) {
      await sleep(velocity)
      for (let j = i; j > 0; j -= gap) {
        await sleep(velocity)
        if (arr[j - gap] > arr[j]) {
          let temp = arr[j - gap]
          context.$set(arr, j - gap, arr[j])
          context.$set(arr, j, temp)
        } else {
          break
        }
      }
    }
  }
}
