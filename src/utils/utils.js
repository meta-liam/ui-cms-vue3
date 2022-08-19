/* eslint-disable */
const Utils = {}

Utils.wait = async ms => {
  const _wait = new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
  return await _wait
}

Utils.intToBoolean = v => {
  if (v === 1 || v === -1 || v === '1' || v === '-1') return true
  if (v === true || v === 'true' || v === 'True') return true
  return false
}

Utils.booleanToInt = v => {
  if (v === true || v === 1 || v === 'True') return 1
  return 0
}

Utils.intTimeToString = v => {
  if (v === 0) {
    return ''
  }
  const date = new Date(v * 1000)
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate()
  D = D >= 10 ? D : '0' + D
  let h = date.getHours()
  h = h >= 10 ? h : '0' + h
  let m = date.getMinutes()
  m = m >= 10 ? m : '0' + m
  let s = date.getSeconds()
  s = s >= 10 ? s : '0' + s
  const time = Y + M + D + ' ' + h + ':' + m + ':' + s
  return time
}

Utils.strTimeToInt = v => {
  var str = v + ':000'
  var date = new Date(str)
  time = Date.parse(date)
  return time
}

export default Utils
