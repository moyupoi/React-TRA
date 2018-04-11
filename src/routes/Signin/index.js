import cookie from 'react-cookie'

export default (store) => ({
  path: '/users/sign_in',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Signin = require('./containers/SigninContainer').default
      cb(null, Signin)
    }, 'signin')
  }
})
