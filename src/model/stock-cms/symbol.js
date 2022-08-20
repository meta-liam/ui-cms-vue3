/* eslint-disable class-methods-use-this */
import _axios, { get, put } from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Symbol {
  // constructor() {}

  async create(data) {
    return _axios({
      method: 'post',
      url: 'cms-api/v1/stock/symbol?add',
      data,
    })
  }

  async edit(info) {
    const res = await put('cms-api/v1/stock/symbol?edit', info)
    return res
  }

  async getItem(id) {
    const res = await get(`cms-api/v1/stock/symbol/${id}`)
    return res
  }

  async delete(id) {
    const data = { ids: [id] }
    return _axios({
      method: 'delete',
      url: 'cms-api/v1/stock/symbol?delete',
      data,
    })
  }

  async getItems(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/stock/symbols',
      params: param,
      handleError: true,
    })
  }
}

export default new Symbol()
