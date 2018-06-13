import React, { Component } from 'react'
import { isEmpty, isUndefined } from 'lodash/fp'

import s from '../assets/Notice.scss'

class Notice extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount () {}
  render () {
    return (
      <div className={s.notice}>
        <div className={s.contentText}>
          <h1>公告</h1>
          <p>鉴于近期个别互联网自媒体披露关于“深圳市住百家发展股份有限公司”（以下简称“住百家公司”）相关文章，其中涉及Travel平台及平台数字代币（TRA）的部分内容对Travel平台造成了不良影响。Travel平台特此声明如下：</p>
          <p>“住百家公司”仅为Travel平台众多业务合作机构之一，并非相关文章所述“Travel平台为‘住百家公司’创立”。与Travel平台业务合作机构还包括Zat Go承云、云雀金服、维纳斯以及中国台湾台北、台南等地区民宿协会等。鉴于业务合作机构实际情况，Travel平台将谨慎评估与“住百家公司”的业务合作事宜。</p>
          <p>对于网络中相关不实报道，Travel平台将保留追究法律责任的权利。</p>
          <span>Travel</span>
          <span>2018年6月13日</span>
        </div>
      </div>
    )
  }
}

Notice.propTypes = {

}

Notice.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Notice
