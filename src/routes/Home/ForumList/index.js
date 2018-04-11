import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path: '/forumList/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ForumList = require('./containers/ForumListContainer').default
      const reducer = require('./modules/forumList').default
      injectReducer(store, { key: 'forumList', reducer })
      cb(null, ForumList)
    }, 'forumList')
  }
})
