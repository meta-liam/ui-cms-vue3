import Utils from '../../utils/utils'
import Symbol from '../../model/stock-cms/symbol'

const formItem = {
  isSubmit: false,
  ...dataItem,
}

const dataItem = {
  id: '0',
  symbol: '',
  createdAt: 0,
  updatedAt: 0,
  created: '',
  updated: '',
  date: '',
  status: 0,
  type: '',
  info: '',
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
  symbol: [{ required: true, message: 'Please input name', trigger: 'blur' }],
  type: [{ required: true, message: 'Please input spec', trigger: 'blur' }],
}
const getItems = async v => {
  const rs = await Symbol.getItems(v)
  console.log('getItems:', rs)
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

const addOrEditItem = async db => {
  console.log('addOrEditItem:', db)
  if (db.id === 0 || db.id === '0') {
    // eslint-disable-next-line no-return-await
    return await Symbol.create(db)
  }
  // eslint-disable-next-line no-return-await
  return await Symbol.edit(db)
}

const deleteItem = async idx => {
  const rs = await Symbol.delete(`${idx}`)
  console.log('deleteItem :', rs)
  return true
}

const setAddNew = db => ({
  editTitle: '新加关注',
  isSubmit: false,
  ...dataItem,
  ...db,
})

const setEditData = db => ({
  editTitle: '修改关注',
  isSubmit: false,
  ...db,
})

export {
  setAddNew,
  setEditData,
  deleteItem,
  addOrEditItem,
  getItems,
  rules,
  dataItem,
  optionsWorker,
  formItem,
  optionsStatus,
}
