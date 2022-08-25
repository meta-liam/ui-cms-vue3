import Utils from '../../../utils/utils'
import Api from '../../../model/core/power'

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
  tag: '',
  status: 1,
  fname: '--',
  fid: '0',
  level: 1,
}

const optionsStatus = [
  {
    value: 0,
    label: '禁用',
  },
  {
    value: 1,
    label: '启用',
  },
]

const rules = {
  name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
  tag: [{ required: true, message: 'Please input tag', trigger: 'blur' }],
}

export const getTreeList = async v => {
  const req = await Api.getTreeItems(v)
  const list = req.data.list || []
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    item.created = Utils.intTimeToString(item?.createdAt)
    item.updated = Utils.intTimeToString(item?.updatedAt)
  }
  console.log('req:tree', list)
  return list
}

export const getAllList = async v => {
  const req = await Api.getItems(v)
  console.log('req:all', req)
  return req.data.list
}

export const findItemById = (id, list) => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if (item.id === id) {
      return item
    }
  }
  return {}
}

const addOrEditItem = async db => {
  console.log('addOrEditItem:', db)
  if (db.id === '0' || db.id === 0) {
    // eslint-disable-next-line no-return-await
    return await Api.create(db)
  }
  // eslint-disable-next-line no-return-await
  return await Api.edit(db)
}

const deleteItem = async idx => {
  const rs = await Api.delete(idx)
  console.log('deleteItem :', rs)
  return true
}

const setAddNew = db => {
  const rs = {
    editTitle: '新加',
    isSubmit: false,
    ...dataItem,
  }
  rs.fid = db.id
  rs.fname = db.name
  rs.level = db.level + 1
  return rs
}

const setEditData = (db, fItem) => {
  const rs = {
    editTitle: '修改',
    isSubmit: false,
    ...db,
  }
  rs.fname = fItem.name
  return rs
}

export { setAddNew, setEditData, deleteItem, addOrEditItem, rules, dataItem, formItem, optionsStatus }
