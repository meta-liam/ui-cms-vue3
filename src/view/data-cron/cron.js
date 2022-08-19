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
}
const getItems = async v => {
  const rs = await Cron.getItems(v)
  console.log('getItems2:', rs)
  const db = {
    list: [],
    pagination: {},
  }
  if (rs.data) {
    return rs.data
  }
  return db
}

const getItems2 = async v => {
  // console.log('getItem:', v)
  const ls = []
  for (let i = 0; i < v.pageSize; i++) {
    const ii = v.current * v.pageSize + i
    ls.push({
      id: `185702333412307-${ii}`,
      name: `200-11-${ii}`,
      created: '2022-06-01 12:35:20',
      updated: '2022-06-01 12:35:22',
      spec: '1/8 * * * *',
      status: i % 2,
      isNotify: 1,
      doStatus: 10,
      workerType: i % 3,
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

const addOrEditItem = async db => {
  console.log('addOrEditItem:', db)
  return true
}

const deleteItem = async idx => {
  // const rs = await deleteItemByApi(idx);
  console.log('deleteItem :', idx)
  return true
}

const setAddNew = db => ({
  editTitle: '新加任务',
  ...formItem,
  ...db,
})

const setEditData = db => ({
  editTitle: '修改新产品',
  isSubmit: false,
  ...db,
})

export {
  getItems2,
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
