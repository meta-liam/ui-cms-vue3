/* eslint-disable class-methods-use-this */
import _axios, { get, put } from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Cron {
  // constructor() {}

  async create(data) {
    return _axios({
      method: 'post',
      url: '/cms-api/v1/task?add',
      data,
    })
  }

  async edit(info) {
    const res = await put('/cms-api/v1/task?edit', info)
    return res
  }

  async getItem(id) {
    const res = await get(`v1/book/${id}`)
    return res
  }

  async delete(id) {
    const data = { ids: [id] }
    return _axios({
      method: 'delete',
      url: '/cms-api/v1/task?delete',
      data,
    })
  }

  async getItems(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/tasks',
      params: param,
      handleError: true,
    })
  }

  async getLogs(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/task-logs',
      params: param,
      handleError: true,
    })
  }

  async getSpiderLogs(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/spider-task-logs',
      params: param,
      handleError: true,
    })
  }
}

export default new Cron()
