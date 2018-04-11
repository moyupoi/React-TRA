import { connect } from 'react-redux'

// import { changeRegion, fetchEntrance, fetchRecommondedOffersIfNeeded, fetchConfigureData } from '../modules/home'
// import { fetchDestinations, searchDestinations } from 'reducers/destination'
// import { offerChangeLike } from 'reducers/offerLike'
import { setTitle } from 'reducers/common'
// import { getMe } from 'reducers/user'
import ForumList from '../components/ForumList'

const mapActionCreators = {
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
  forumList: state.forumList
})

export default connect(mapStateToProps, mapActionCreators)(ForumList)
