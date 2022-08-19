/* eslint-disable class-methods-use-this */
import Utils from '../../utils/utils'

// const dataItem = {
//   id: 0,
//   createdAt: 0
// }

const getItems = async v => {
  console.log('getItem:', v)
  const ls = []
  for (let i = 0; i < v.pageSize; i++) {
    const ii = v.current * v.pageSize + i
    ls.push({
      id: ii,
      date: '2016-05-07',
      taskId: `200-11-${ii}`,
      created: '2022-06-01 12:35:22',
      info: '{"type":"http","code":200,"result":"{"code": 0, "data": {"task_id": 11, "list": []}}"}',
      status: i % 3,
    })
  }
  await Utils.wait(100)
  const rs = {
    list: ls,
    pagination: { total: ls.length * 100 },
  }
  return rs
}

const clearHistory = async v => {
  console.log('getItem:', v)
  await Utils.wait(100)
  return true
}

export { clearHistory, getItems }
