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

export default Utils
