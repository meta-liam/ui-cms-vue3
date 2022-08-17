import db from '../../mock/priceHis001979.json'

const option = {
  title: {
    text: '',
  },
  xAxis: {
    type: 'category',
    data: db.data.list.price,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: db.data.list.volume,
      type: 'bar',
      smooth: true,
    },
  ],
}
export default option
