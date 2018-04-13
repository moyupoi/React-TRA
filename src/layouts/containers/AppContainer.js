import { connect } from 'react-redux'

// import { wechat } from 'reducers/common'
import App from '../components/App'

const mapActionCreators = {
  // wechat
}

const mapStateToProps = (state) => ({
  user: state.user,
  // common: state.common
})

export default connect(mapStateToProps, mapActionCreators)(App)
