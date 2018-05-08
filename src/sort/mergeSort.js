import sleep from '@/utils/sleep'
const { floor } = Math
export default async function (arr, context, velocity = 0) {
  async function divide (arr, left, right) {
    if (left < right) {
      let mid = floor((left + right) / 2)
      await divide.call(this, arr, left, mid)
      await divide.call(this, arr, mid + 1, right)
      await merge.call(this, arr, left, mid, right)
    }
  }
  async function merge (arr, start, mid, end) {
    let temp = []
    let left = start
    let right = mid + 1
    let index = start
    let _index = start
    while (left <= mid && right <= end) {
      if (arr[left] <= arr[right]) {
        temp[index++] = arr[left++]
      } else {
        temp[index++] = arr[right++]
      }
    }
    while (left <= mid) {
      temp[index++] = arr[left++]
    }
    while (right <= end) {
      temp[index++] = arr[right++]
    }
    while (_index <= end) {
      context.$set(arr, _index, temp[_index++])
      await sleep(velocity)
    }
  }
  await divide.call(context, context.arr, 0, context.arr.length - 1)
}
