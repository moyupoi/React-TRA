import { connect } from 'react-redux'

import { actions } from '../modules/cityOffers'
import { setTitle } from 'reducers/common'
import CityOffers from '../components/CityOffers'

const mapActionCreators = {
  ...actions,
  setTitle
}

const mapStateToProps = (state) => ({
  cityOffers: state.cityOffers
})

export default connect(mapStateToProps, mapActionCreators)(CityOffers)
