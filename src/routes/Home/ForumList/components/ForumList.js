import React, { Component } from 'react'
import { Link } from 'react-router'

import s from '../assets/ForumList.scss'
import portrait from '../assets/portrait.png'
import topicContentImg from '../assets/topicContentImg.jpg'
import { bindWechat } from 'tools/bindWechat'

class ForumList extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    bindWechat('论坛帖子', 'V3EX')
  }

  componentWillUnmount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    const items = {
      'themeType': '二手交易',
      'theme': '继续出两个 PS4 游戏 怪物猎人世界和生化危机 7',
      'browseNumber': '10',
      'date': '4小时前 37分钟',
      'visit': '365',
      'name': 'lengxiao'
    }
    return (
      <div className={s.forumListContent}>
        <p className={s.title}>{items.themeType}</p>
        <p className={s.name}>{items.theme}</p>
        <aside>by {items.name} {items.date} {items.visit}次点击</aside>
        <div className={s.topicContent}>
          <p>此公寓位于东京丰岛区，让您远离城市的喧嚣，在这里享受房间的幽静。配有1个小厨房，可供您自行烹饪。1间独立干净的浴室。公寓附近有居酒屋、快餐店、便利店，步行一分钟就可以到达投币洗衣店、公共浴室，非常便利。距离池袋非常近，交通方便快捷，您可以在这里体验大都市的繁华，购物、美食、水族馆,都会让您不虚此行的。非常适合情侣、独身旅行者、出差的人、带孩子的家庭入住。卧室： 2张双人床+1张单人床垫</p>
          <img src={topicContentImg} />
          <span>斯里兰卡，太平洋上静谧的一个小岛，它没有世界七大奇迹那样华丽的头衔，不似印度洋那般绚丽多彩，更没有泰国出名的丰富美食，但是兰卡，就像印度洋上的一颗珍珠，就那么静静的躺在印度洋上，等着我们去发现它。</span>
          <img src={topicContentImg} />
        </div>
      </div>
    )
  }
}

ForumList.propTypes = {

}

export default ForumList
