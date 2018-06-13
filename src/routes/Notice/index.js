import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/notice',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Notice = require('./containers/NoticeContainer').default
      const reducer = require('./modules/notice').default
      injectReducer(store, { key: 'notice', reducer })
      cb(null, Notice)
    }, 'notice')
  }
})
