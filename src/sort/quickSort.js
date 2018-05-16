import sleep from '@/utils/sleep'
// const { floor, random } = Math

const filter = async function (base, origin, dest, type) {
  origin.forEach(item => {
    if (type === 'lt') {
      if (item < base) {
        dest.push(item)
      }
    } else if (type === 'le') {
      if (item <= base) {
        dest.push(item)
      }
    } else if (type === 'eq') {
      if (item === base) {
        dest.push(item)
      }
    } else if (type === 'gt') {
      if (item > base) {
        dest.push(item)
      }
    } else if (type === 'ge') {
      if (item >= base) {
        dest.push(item)
      }
    }
  })
}

export default async function (origin, context, velocity = 0) {
  async function qs (arr, origin, startIndex) {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    filter(arr[0], arr.slice(1), left, 'le')
    for (let i = 0; i < left.length; i++) {
      await sleep(velocity)
      context.$set(origin, startIndex + i, left[i])
    }
    await sleep(velocity)
    context.$set(origin, left.length + startIndex, arr[0])
    filter(arr[0], arr.slice(1), right, 'gt')
    for (let i = 0; i < right.length; i++) {
      await sleep(velocity)
      context.$set(origin, startIndex + left.length + i + 1, right[i])
    }
    await qs.call(context, left, origin, startIndex)
    await qs.call(context, right, origin, left.length + startIndex + 1)
    return left.concat(arr[0], right)
  }
  let arr = JSON.parse(JSON.stringify(origin))
  await qs.call(context, arr, origin, 0)
}
