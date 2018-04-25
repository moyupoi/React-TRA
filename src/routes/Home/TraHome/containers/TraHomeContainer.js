import { connect } from 'react-redux'

import { actions } from '../modules/traHome'
import { setTitle } from 'reducers/common'
import TraHome from '../components/TraHome'

const mapActionCreators = {
  ...actions,
  setTitle
}

const mapStateToProps = (state) => ({
  traHome: state.traHome,
  cityData: [
    {
      cityName: '日本',
      cityNameEn: 'Japan',
      img: 'back01'
    },
    {
      cityName: '意大利',
      cityNameEn: 'Italy',
      img: 'back02'
    },
    {
      cityName: '法国',
      cityNameEn: 'France',
      img: 'back03'
    },
    {
      cityName: '西班牙',
      cityNameEn: 'Spain',
      img: 'back04'
    },
    {
      cityName: '英国',
      cityNameEn: 'Britain',
      img: 'back05'
    },
    {
      cityName: '澳大利亚',
      cityNameEn: 'Australia',
      img: 'back06'
    },
    {
      cityName: '泰国',
      cityNameEn: 'Thailand',
      img: 'back07'
    },
    {
      cityName: '美国',
      cityNameEn: 'USA',
      img: 'back08'
    }
  ]
})

export default connect(mapStateToProps, mapActionCreators)(TraHome)
