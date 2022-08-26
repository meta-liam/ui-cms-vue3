import Utils from '../../../utils/utils'
import User from '../../../model/core/user'
import { getItems as getRoleItems } from '../rbac/role'

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
  nickname: '',
  status: 0,
  phone: '',
  remark: '',
  email: '',
  password: '',
  roleIds: [],
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
  email: [{ required: true, message: 'Please input email', trigger: 'blur' }],
}
const getItems = async v => {
  const rs = await User.getItems(v)
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
    }
    return db
  }
  return db
}

const addOrEditItem = async db => {
  console.log('addOrEditItem:', db)
  if (db.id === '0' || db.id === 0) {
    // eslint-disable-next-line no-return-await
    return await User.create(db)
  }
  // eslint-disable-next-line no-return-await
  return await User.edit(db)
}

const deleteItem = async idx => {
  const rs = await User.delete(idx)
  console.log('deleteItem :', rs)
  return true
}

const setAddNew = db => ({
  editTitle: '新加用户',
  isSubmit: false,
  ...dataItem,
  ...db,
})

const setEditData = db => ({
  editTitle: '修改用户',
  isSubmit: false,
  ...db,
})

// eslint-disable-next-line no-return-await
export const getRoles = async v => await getRoleItems(v)

export { setAddNew, setEditData, deleteItem, addOrEditItem, getItems, rules, dataItem, formItem, optionsStatus }
