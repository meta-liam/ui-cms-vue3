import Utils from '../../utils/utils'
import Cron from '../../model/cron/cron'

const formItem = {
  isSubmit: false,
  ...dataItem,
}

const dataItem = {
  id: '0',
  name: '',
  createdAt: 0,
  updatedAt: 0,
  created: '',
  updated: '',
  spec: '',
  status: 0,
  isNotify: 0,
  doStatus: 0,
  doUpdatedAt: 0,
  workerType: 0,
  notifyStatus: 0,
  notifyConfig: '',
  config: '',
  command: '',
}

const optionsStatus = [
  {
    value: 0,
    label: '不启动',
  },
  {
    value: 1,
    label: '启动',
  },
]

const optionsWorker = [
  {
    value: 0,
    label: '不通知',
  },
  {
    value: 1,
    label: 'Http通知',
  },
  {
    value: 2,
    label: 'Shell通知',
  },
]

const rules = {
  name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
  spec: [{ required: true, message: 'Please input spec', trigger: 'blur' }],
}
const getItems = async v => {
  const rs = await Cron.getItems(v)
  console.log('getItems2:', rs)
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
      item.updated = Utils.intTimeToString(item?.doUpdatedAt)
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

const addOrEditItem = async db => {
  console.log('addOrEditItem:', db)
  if (db.id === '0') {
    // eslint-disable-next-line no-return-await
    return await Cron.create(db)
  }
  // eslint-disable-next-line no-return-await
  return await Cron.edit(db)
}

const deleteItem = async idx => {
  const rs = await Cron.delete(idx)
  console.log('deleteItem :', rs)
  return true
}

const setAddNew = db => ({
  editTitle: '新加任务',
  isSubmit: false,
  ...dataItem,
  ...db,
})

const setEditData = db => ({
  editTitle: '修改新产品',
  isSubmit: false,
  ...db,
})

export {
  setAddNew,
  setEditData,
  deleteItem,
  addOrEditItem,
  clearHistory,
  getItems,
  rules,
  dataItem,
  optionsWorker,
  formItem,
  optionsStatus,
}
