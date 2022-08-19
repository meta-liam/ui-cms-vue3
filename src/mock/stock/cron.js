import Utils from '../../utils/utils'

const getItems = async v => {
  // console.log('getItem:', v)
  const ls = []
  for (let i = 0; i < v.pageSize; i++) {
    const ii = v.current * v.pageSize + i
    ls.push({
      id: `185702333412307-${ii}`,
      name: `200-11-${ii}`,
      created: '2022-06-01 12:35:20',
      updated: '2022-06-01 12:35:22',
      spec: '1/8 * * * *',
      status: i % 2,
      isNotify: 1,
      doStatus: 10,
      workerType: i % 3,
    })
  }
  await Utils.wait(100)
  const rs = {
    list: ls,
    pagination: { total: ls.length * 100 },
  }
  return rs
}

const getItems2 = async v => {
  console.log(v)
}

export { getItems, getItems2 }
