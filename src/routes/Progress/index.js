import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/progress',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Progress = require('./containers/ProgressContainer').default
      const reducer = require('./modules/progress').default
      injectReducer(store, { key: 'progress', reducer })
      cb(null, Progress)
    }, 'progress')
  }
})
