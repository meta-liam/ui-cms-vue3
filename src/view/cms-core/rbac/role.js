import Utils from '../../../utils/utils'
import RoleApi from '../../../model/core/role'

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
  status: 1,
  powerIds: [],
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
}
const getItems = async v => {
  const rs = await RoleApi.getItems(v)
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
    return await RoleApi.create(db)
  }
  // eslint-disable-next-line no-return-await
  return await RoleApi.edit(db)
}

const deleteItem = async idx => {
  const rs = await RoleApi.delete(idx)
  console.log('deleteItem :', rs)
  return true
}

const setAddNew = db => ({
  editTitle: '新加角色',
  isSubmit: false,
  ...dataItem,
  ...db,
})

const setEditData = db => ({
  editTitle: '修改角色',
  isSubmit: false,
  ...db,
})

export { setAddNew, setEditData, deleteItem, addOrEditItem, getItems, rules, dataItem, formItem, optionsStatus }
