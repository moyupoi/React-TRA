import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/space',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Space = require('./containers/SpaceContainer').default
      const reducer = require('./modules/space').default
      injectReducer(store, { key: 'space', reducer })
      cb(null, Space)
    }, 'space')
  }
})
