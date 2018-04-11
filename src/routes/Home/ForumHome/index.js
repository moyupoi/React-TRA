import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ForumHome = require('./containers/ForumHomeContainer').default
      const reducer = require('./modules/forumHome').default
      injectReducer(store, { key: 'forumHome', reducer })
      cb(null, ForumHome)
    }, 'forumHome')
  }
})
