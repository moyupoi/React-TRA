import { connect } from 'react-redux'

import { setTitle } from 'reducers/common'
import Sign from '../Components/Signin'

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapActionCreators)(Sign)
