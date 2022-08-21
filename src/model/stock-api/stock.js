/* eslint-disable class-methods-use-this */
import _axios from '@/lin/plugin/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Stock {
  // constructor() {}

  async getSymbolItems(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/center/stock/symbols',
      params: param,
      handleError: true,
    })
  }

  async getSymbolHisPriceItems(param) {
    return _axios({
      method: 'get',
      url: 'cms-api/v1/center/stock/symbols-his-price',
      params: param,
      handleError: true,
    })
  }
}

export default new Stock()
