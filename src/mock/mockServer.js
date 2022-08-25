/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
// import powerTree from './core/rbac-power-list-tree.json'
// import powerList from './core/rbac-power-list.json'
// import { getLogs, getSpiderLogs } from './stock/cron'

// my data :发布时 const isMock = false , dev: true
const isMock = true

if (isMock) {
  const BASE_URL = 'http://localhost:8008/'
  Mock.mock(`${BASE_URL}cms/user/captcha`, data.user_captcha)
  Mock.mock(`${BASE_URL}cms/user/login`, data.user_login_pwd)
  Mock.mock(`${BASE_URL}cms/user/permissions`, data.permissions)

  Mock.mock(`${BASE_URL}cms/log/users?count=5&page=0`, data.log_users)
  Mock.mock(`${BASE_URL}cms/log?count=10&page=0`, data.log_list)
  Mock.mock(`${BASE_URL}cms/log/search?count=10&page=0&keyword=&name=root`, data.log_search)

  Mock.mock(`${BASE_URL}cms/admin/users?count=10&page=0`, data.admin_users)
  Mock.mock(`${BASE_URL}cms/admin/group/all`, data.ops_log)
  Mock.mock(`${BASE_URL}api_metric/v1/api/ops/log/1`, 'patch', data.ok)

  // cron
  // Mock.mock(`${BASE_URL}cms-api/v1/tasks?pageSize=10&current=1&name=`, tasks)
  // Mock.mock(`${BASE_URL}cms-api/v1/task?add`, { code: 0 })
  // Mock.mock(`${BASE_URL}cms-api/v1/task?edit`, { code: 0 })
  // Mock.mock(`${BASE_URL}cms-api/v1/task?delete`, { code: 0 })
  // Mock.mock(`${BASE_URL}cms-api/v1/task-logs?pageSize=10&current=1&name=`, getLogs)
  // Mock.mock(`${BASE_URL}cms-api/v1/spider-task-logs?pageSize=10&current=1&name=`, getSpiderLogs)

  // core
  // Mock.mock(`${BASE_URL}cms-api/v1/rbac/cms/powers-tree?current=1`, powerTree)
  // Mock.mock(`${BASE_URL}cms-api/v1/rbac/cms/powers`, powerList)
}

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
