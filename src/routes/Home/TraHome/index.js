import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const TraHome = require('./containers/TraHomeContainer').default
      const reducer = require('./modules/traHome').default
      injectReducer(store, { key: 'traHome', reducer })
      cb(null, TraHome)
    }, 'traHome')
  }
})
