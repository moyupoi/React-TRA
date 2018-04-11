import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Helmet from 'react-helmet'
import cookie from 'react-cookie'
import { Link } from 'react-router'

import s from '../assets/Space.scss'
import portrait from '../assets/portrait.png'
import header from '../assets/header.jpg'

class Space extends Component {

  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    const historicalRecords = [{
      'title': '25岁睡了18岁的自己又生下自己，标题都看不懂？剧情更烧脑！',
      'date': '今天 8:41',
      'id': '0'
    }, {
      'title': '25岁睡了18岁的自己又生下自己，标题都看不懂？剧情更烧脑！',
      'date': '今天 8:41',
      'id': '1'
    }, {
      'title': '25岁睡了18岁的自己又生下自己，标题都看不懂？剧情更烧脑！',
      'date': '今天 8:41',
      'id': '2'
    }, {
      'title': '25岁睡了18岁的自己又生下自己，标题都看不懂？剧情更烧脑！',
      'date': '今天 8:41',
      'id': '3'
    }, {
      'title': '25岁睡了18岁的自己又生下自己，标题都看不懂？剧情更烧脑！',
      'date': '今天 8:41',
      'id': '4'
    }, {
      'title': '25岁睡了18岁的自己又生下自己，标题都看不懂？剧情更烧脑！',
      'date': '今天 8:41',
      'id': '5'
    }]
    return (
      <div className={s.spaceContain}>
        <header>
          <img src={header} className={s.back} />
          <nav>
            <img src={portrait} />
            <p>墨鱼卷</p>
          </nav>
        </header>
        <section>
          <p>历史记录</p>
          <div className={s.historicalRecords}>
            { historicalRecords.map((item, i) =>
              <Link to={ '/forumList/' + item.id } className={s.item} key={i}>
                <img src={header} />
                <div className={s.items}>
                  <aside style={{ webkitBoxOrient: 'vertical' }}>{item.title}</aside>
                  <span>{item.date}</span>
                </div>

              </Link>
            )}
          </div>
        </section>
      </div>
    )
  }
}

Space.propTypes = {

}

Space.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Space
