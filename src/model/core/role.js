/* eslint-disable class-methods-use-this */
import _axios from '@/lin/plugin/axios'

class Role {
  // constructor() {}

  async create(data) {
    return _axios({
      method: 'post',
      url: 'cms-api/v1/rbac/cms/role?add',
      data,
    })
  }

  async edit(data) {
    return _axios({
      method: 'put',
      url: 'cms-api/v1/rbac/cms/role?edit',
      data,
    })
  }

  async delete(id) {
    const data = { ids: [id], status: 44 }
    return _axios({
      method: 'put',
      url: 'cms-api/v1/rbac/cms/role-status?delete',
      data,
    })
  }

  async getItems(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/rbac/cms/roles',
      params: param,
      handleError: true,
    })
  }
}

export default new Role()
