/* eslint-disable class-methods-use-this */
import Utils from '../../utils/utils'
import Cron from '../../model/cron/cron'

// const dataItem = {
//   id: 0,
//   createdAt: 0
// }

const getItems = async v => {
  const rs = await Cron.getSpiderLogs(v)
  console.log('spider getItems:', rs)
  const db = {
    list: [],
    pagination: {},
  }
  if (rs.data) {
    db.list = rs.data.list
    db.pagination = rs.data.pagination
    for (let i = 0; i < db.list.length; i++) {
      const item = db.list[i]
      item.created = Utils.intTimeToString(item?.createdAt)
      item.updated = Utils.intTimeToString(item?.updatedAt)
      // console.log('item:', item, item?.created)
    }
    return db
  }
  return db
}

const clearHistory = async v => {
  console.log('getItem:', v)
  await Utils.wait(100)
  return true
}

export { clearHistory, getItems }
