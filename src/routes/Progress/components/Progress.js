import React, { Component } from 'react'
import { isEmpty, isUndefined } from 'lodash/fp'

import s from '../assets/Progress.scss'

class Progress extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount () {}
  render () {
    return (
      <div className={s.notice}>
        <div className={s.contentText}>
          <h1>Travel项目最新进展</h1>
          <p>为了让Travel旅行链（TRA）的各位支持者及时了解到项目进展，现将项目情况作以整理。近期，Travel在平台用户积累、平台积分系统搭建、平台激励模型建构等三方面有所突破，具体如下：</p>
          <p>1. 平台用户积累拓展，包括旅行达人、商户、个人用户、企业用户等平台内容生产者的积极拓展，为平台优质内容产生做储备。</p>
          <p>2. 初始行为激励模型构建，用于用户在平台内行为奖励，用户登陆、互动均可获得平台激励。</p>
          <p>3. 平台积分体系搭建，为实现平台内用户行为产生、积分兑换、积分流通等效能搭建一套相对完善的平台积分体系。</p>
          <span>Travel</span>
          <span>2018年6月14日</span>
        </div>
      </div>
    )
  }
}

Progress.propTypes = {

}

Progress.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Progress
