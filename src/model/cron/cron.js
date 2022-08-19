/* eslint-disable class-methods-use-this */
import _axios, { get, put, _delete } from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Cron {
  // constructor() {}

  async create(data) {
    return _axios({
      method: 'post',
      url: '/api/v1/task',
      data,
    })
  }

  async edit(info) {
    const res = await put('/api/v1/task', info)
    return res
  }

  async getItem(id) {
    const res = await get(`v1/book/${id}`)
    return res
  }

  async deleteBook(id) {
    const res = await _delete(`v1/book/${id}`)
    return res
  }

  async getItems(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/tasks',
      params: param,
      handleError: true,
    })
  }
}

export default new Cron()
