import { App } from 'layouts'
// 论坛
import TraHome from './Home/TraHome'
import CityOffers from './Home/CityOffers'
import Notice from './Notice'

// 404
import NotFound from './NotFound'

export const createRoutes = (store) => ([
  {
    path: '/',
    component: App,
    indexRoute: TraHome(store),
    childRoutes: [
      CityOffers(store),
      Notice(store)
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
