import User from '../../../model/core/user'

export const dataItem = {
  id: '0',
  avatar: '',
  email: '',
  groups: '',
  nickname: '',
  username: '',
  phone: '',
  newPsw: '',
  newPsw2: '',
  oldPassword: '',
}

export const rules = {
  oldPassword: [{ required: true, message: 'Please input password', trigger: 'blur' }],
  newPsw: [{ required: true, message: 'Please input password', trigger: 'blur' }],
  newPsw2: [{ required: true, message: 'Please input password', trigger: 'blur' }],
}

export const getInfo = async () => {
  const us = await User.getInfo()
  const rs = { ...dataItem, ...us?.data }
  // console.log('us', rs)
  return rs
}

export const updateUserPsw = async v => {
  const db = { oldPassword: v.oldPassword, newPassword: v.newPsw }
  const rs = await User.changePassword(db)
  if (rs.code === 0 || rs.message === 'OK') {
    return { result: true, msg: '更新成功' }
  }
  return { result: false, msg: rs.message }
}
