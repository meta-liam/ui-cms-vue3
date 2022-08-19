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

export default Utils
