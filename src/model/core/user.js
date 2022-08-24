/* eslint-disable class-methods-use-this */
import _axios, { get } from '@/lin/plugin/axios'

class User {
  // constructor() {}

  async login(data) {
    return _axios({
      method: 'post',
      url: 'cms-api/v1/login',
      data,
    })
  }

  async register(data) {
    return _axios({
      method: 'post',
      url: 'cms-api/v1/cms/user/register',
      data,
    })
  }

  async changePassword(data) {
    return _axios({
      method: 'put',
      url: 'cms-api/v1/cms/user/change-password',
      data,
    })
  }

  async refresh(data) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/cms/user/refresh',
      data,
    })
  }

  async create(data) {
    return _axios({
      method: 'post',
      url: 'cms-api/v1/cms/user?add',
      data,
    })
  }

  async edit(data) {
    return _axios({
      method: 'patch',
      url: 'cms-api/v1/cms/user?edit',
      data,
    })
  }

  async getInfo() {
    const res = await get('cms-api/v1/cms/user/information')
    return res
  }

  async delete(id) {
    const data = { ids: [id], status: 44 }
    return _axios({
      method: 'put',
      url: 'cms-api/v1/cms/user/status?delete',
      data,
    })
  }

  async getItems(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/cms/users',
      params: param,
      handleError: true,
    })
  }
}

export default new User()
