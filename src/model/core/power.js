/* eslint-disable class-methods-use-this */
import _axios, { _delete } from '@/lin/plugin/axios'

class Power {
  // constructor() {}

  async create(data) {
    return _axios({
      method: 'post',
      url: 'cms-api/v1/rbac/cms/power?add',
      data,
    })
  }

  async edit(data) {
    return _axios({
      method: 'put',
      url: 'cms-api/v1/rbac/cms/power?edit',
      data,
    })
  }

  async delete(id) {
    const res = await _delete(`cms-api/v1/rbac/cms/power/${id}`)
    return res
  }

  async getTreeItems(param) {
    // eslint-disable-next-line no-param-reassign
    param = { current: 1 }
    return _axios({
      method: 'get',
      url: 'cms-api/v1/rbac/cms/powers-tree',
      params: param,
      handleError: true,
    })
  }

  async getItems(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/rbac/cms/powers',
      params: param,
      handleError: true,
    })
  }
}

export default new Power()
