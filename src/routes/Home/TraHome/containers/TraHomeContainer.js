import { connect } from 'react-redux'

import { actions } from '../modules/traHome'
import { setTitle } from 'reducers/common'
// import { getMe } from 'reducers/user'
import TraHome from '../components/TraHome'

const mapActionCreators = {
  ...actions,
  setTitle
}

const mapStateToProps = (state) => ({
  traHome: state.traHome
})

export default connect(mapStateToProps, mapActionCreators)(TraHome)
