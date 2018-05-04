import sleep from '@/utils/sleep'
const { floor, random } = Math
export default async function (arr, context, velocity = 0) {
  async function qs (_arr) {  // eslint-disable-line
    if (_arr.length <= 1) return _arr
    let left = []
    let right = []
    let mid = []
    let base = floor(random() * _arr.length)
    for (let i = 0; i < _arr.length; i++) {
      await sleep(velocity)
      if (_arr[i] > _arr[base]) {
        right.push(_arr[i])
      } else if (_arr[i] < _arr[base]) {
        left.push(_arr[i])
      } else {
        mid.push(_arr[i])
      }
      await sleep(velocity)
    }
    console.log('1')
    // qs.call(context, left).concat(qs.call(context, mid), qs.call(context, right))
    return qs.call(context, left).concat(qs.call(context, mid), qs.call(context, right))
  }
  context.arr = await qs.call(context, arr)
}
