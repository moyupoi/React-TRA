import { connect } from 'react-redux'

import { actions } from '../modules/forumHome'
// import { fetchDestinations, searchDestinations } from 'reducers/destination'
// import { offerChangeLike } from 'reducers/offerLike'
import { setTitle } from 'reducers/common'
// import { getMe } from 'reducers/user'
import ForumHome from '../components/ForumHome'

const mapActionCreators = {
  ...actions,
  // changeRegion,
  // fetchEntrance,
  // fetchRecommondedOffersIfNeeded,
  // fetchDestinations,
  // searchDestinations,
  // offerChangeLike,
  setTitle
  // getMe,
  // fetchConfigureData
}

const mapStateToProps = (state) => ({
  forumHome: state.forumHome
})

export default connect(mapStateToProps, mapActionCreators)(ForumHome)
