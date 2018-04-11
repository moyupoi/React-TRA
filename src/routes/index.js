import { App } from 'layouts'
// 论坛
import ForumHome from './Home/ForumHome'
import ForumList from './Home/ForumList'
import Signin from './Signin'
import Space from './Space'
// 404
import NotFound from './NotFound'

export const createRoutes = (store) => ([
  {
    path: '/',
    component: App,
    indexRoute: ForumHome(store),
    childRoutes: [
      ForumList(store),
      Signin(store),
      Space(store)
    ]
  },
  {
    path: '/page/404',
    component: App,
    indexRoute: NotFound
  },
  {
    path: '*',
    component: App,
    indexRoute: NotFound
  }
])

// FIXME page/404
export default createRoutes
