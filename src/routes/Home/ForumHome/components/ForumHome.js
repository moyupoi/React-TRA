import React, { Component } from 'react'
import { Link } from 'react-router'
import { isEmpty, isUndefined } from 'lodash/fp'

import s from '../assets/ForumHome.scss'
import portrait from '../assets/portrait.png'
class ForumHome extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  handleClick(e, nextRegion) {
    this.props.changeRegion(nextRegion)
  }

  render () {
    const { forumHome } = this.props
    const { attractionsRegionId } = forumHome
    if (!isUndefined(attractionsRegionId)) {
      console.log(attractionsRegionId)
    }
    const themeType = ['技术', '创意', '最热', '韭菜', '好玩', '节点', '关注', '酷工作', '城市', '问与答', 'R2', '全部']
    const items = [{
      'themeType': '二手交易',
      'theme': '继续出两个 PS4 游戏 怪物猎人世界和生化危机 7',
      'browseNumber': '10',
      'name': 'lengxiao'
    },{
      'themeType': '创意',
      'theme': '小爱音箱 mini 99 元和小爱音箱 299 元（南京 MIUI 招人啦！社招）',
      'browseNumber': '12',
      'name': 'lengxiao'
    },{
      'themeType': '好玩',
      'theme': '我又回来了 出区号 8 位 有喜欢的可以联系 只发帖 不做其他言论',
      'browseNumber': '20',
      'name': 'lengxiao'
    },{
      'themeType': '酷工作',
      'theme': '[迫于买车票，出华米手表Ⅰ代] Amazifit PACE',
      'browseNumber': '30',
      'name': 'lengxiao'
    },{
      'themeType': 'Apple',
      'theme': '自用台式机主机 i7-3770s 3x8G 内存 技嘉 gtx960 4G',
      'browseNumber': '5',
      'name': 'lengxiao'
    },{
      'themeType': '城市',
      'theme': '迫....迫于抢不到...加价收小米 AI 音箱或 F 码',
      'browseNumber': '100',
      'name': 'lengxiao'
    },{
      'themeType': '最热',
      'theme': '[出] 笔记本内存 DDR3 1.35V 4GB * 2, 单条 120 人民币, 不包邮',
      'browseNumber': '20',
      'name': 'lengxiao'
    },{
      'themeType': '节点',
      'theme': '整理，出 NanoPi M1、树莓派 2B、WD My Book Live 3TB、思科网件无线路由等',
      'browseNumber': '50',
      'name': 'lengxiao'
    },{
      'themeType': '关注',
      'theme': '迫于没什么钱，有人出 x220 或者类似的本本吗？本人小弟想学编程，成色不要太旧就行。或者有推荐的*宝店也可麻烦告知，谢谢了',
      'browseNumber': '15',
      'name': 'lengxiao'
    }]
    return (
      <div className={s.homeContent}>
        <div className={s.header}>
          <a href='javascript:;'>
            <img src={portrait} />
            <span>墨鱼卷</span>
          </a>
        </div>
        <div className={s.themeType}>
          { themeType.map((item, i) =>
            <a href='javascript:;' className={ isUndefined(attractionsRegionId) && i == 0 ? s.active : attractionsRegionId == i ? s.active : ''  } key={i} onClick={() => this.handleClick(item, i)}>{item}</a>
          )}
        </div>
        <div className={s.forumList}>
          { items.map((item, i) =>
            <Link to={ '/forumList/' + i } className={s.item} key={i}>
              <img src={portrait} />
              <article>
                <section>
                  <span>{item.themeType}</span>
                  <span>{item.name}</span>
                </section>
                <aside>
                  <p>{item.theme}</p>
                  <span>{item.browseNumber}</span>
                </aside>
              </article>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

ForumHome.propTypes = {

}

export default ForumHome
