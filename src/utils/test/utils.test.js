import Utils from '../utils'

describe('dct-sku:utils', () => {
  it('intTimeToString', async () => {
    const r = Utils.intTimeToString(1398250549490)
    console.log(r)
    // expect(r).toEqual('2014-04-23 18:55:49')
  })
})
