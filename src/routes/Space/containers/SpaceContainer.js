import { connect } from 'react-redux'

import { setTitle } from 'reducers/common'
import Space from '../Components/Space'

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapActionCreators)(Space)
