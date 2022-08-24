import Utils from '../../utils/utils'
import Stock from '../../model/stock-api/stock'

const optionData = (xData, seriesData) => {
  const op = {
    title: {
      text: '',
    },
    xAxis: {
      type: 'category',
      data: xData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: seriesData,
        type: 'bar',
        smooth: true,
      },
    ],
  }
  return op
}

const getSymbolHisPriceItems = async v => {
  const rs = await Stock.getSymbolHisPriceItems({ code: v, pageSize: 10000 })
  console.log('getItems:', rs)
  const db2 = {
    date: '',
    option: {},
  }
  if (rs.data) {
    const { list } = rs.data
    const price = []
    const volume = []
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      price.push(item.price)
      volume.push(item.volume)
      if (db2.date === '') {
        db2.date = Utils.intTimeToString(item?.createdAt)
      }
    }
    db2.option = optionData(price, volume)
  }
  return db2
}

const getSymbolItems = async v => {
  console.log(v)
}

export { getSymbolItems, getSymbolHisPriceItems, optionData }
