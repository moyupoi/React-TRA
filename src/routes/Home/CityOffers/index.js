import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path: '/city_offers/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const CityOffers = require('./containers/CityOffersContainer').default
      const reducer = require('./modules/cityOffers').default
      injectReducer(store, { key: 'cityOffers', reducer })
      cb(null, CityOffers)
    }, 'cityOffers')
  }
})
