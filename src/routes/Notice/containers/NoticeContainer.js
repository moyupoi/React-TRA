import { connect } from 'react-redux'

import { actions } from '../modules/notice'
import Notice from '../components/Notice'

const mapActionCreators = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapActionCreators)(Notice)
