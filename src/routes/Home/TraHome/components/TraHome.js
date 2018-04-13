import React, { Component } from 'react'
import { isEmpty, isUndefined } from 'lodash/fp'
import { SectionsContainer, Section } from 'react-fullpage'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import intl from 'react-intl-universal'

import s from '../assets/TraHome.scss'
import zhCN from '../assets/locales/zh-CN'
import enUS from '../assets/locales/en-US'
import logo from '../assets/logo.png'
import contactus_t1 from '../assets/contactus_t1.png'
import contactus_t2 from '../assets/contactus_t2.png'
import contactus_t3 from '../assets/contactus_t3.png'
import contactus_t4 from '../assets/contactus_t4.png'
import contactus_t5 from '../assets/contactus_t5.png'
import videoImg from '../assets/videoImg.png'

class TraHome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectLanguage: false,
      initDone: false,
      pdf: '/tra/assets/pdf/Travel_White Paper_cn.pdf',
      videoAd: 'http://www.travel.one/tra/assets/video/video_cn.mp4'
    }
  }

  componentDidMount () {
    const { fetchOkexesTicker, setTitle } = this.props
    setTitle('Travel')
    this.loadLocales()
    fetchOkexesTicker()
  }

  handleClick () {
    this.setState({
      selectLanguage: !this.state.selectLanguage
    })
  }

  language (land) {
    const locales = {
      'zh-CN': require('../assets/locales/zh-CN.js'),
      'zh_TW': require('../assets/locales/zh_TW.js'),
      'en-US': require('../assets/locales/en-US.js')
    }
    intl.init({
      currentLocale: land,
      locales,
    })
    .then(() => {
      this.setState({initDone: true})
    })
    switch (land) {
      case 'zh-CN':
        this.setState({
          pdf: '/tra/assets/pdf/Travel_White Paper_cn.pdf',
          videoAd: 'http://www.travel.one/tra/assets/video/video_cn.mp4'
        })
        break
      case 'en-US':
        this.setState({
          pdf: '/tra/assets/pdf/Travel_White Paper_en.pdf',
          videoAd: 'http://www.travel.one/tra/assets/video/video_en.mp4'
        })
        break
      case 'zh_TW':
        this.setState({
          pdf: '/tra/assets/pdf/Travel_White Paper_cn.pdf',
          videoAd: 'http://www.travel.one/tra/assets/video/video_cn.mp4'
        })
        break
      default:
    }
  }

  loadLocales () {
    const locales = {
      'zh-CN': require('../assets/locales/zh-CN.js'),
      'zh_TW': require('../assets/locales/zh_TW.js'),
      'en-US': require('../assets/locales/en-US.js')
    }
    intl.init({
      currentLocale: navigator.language,
      locales,
    })
    .then(() => {
      this.setState({initDone: true})
    })
  }

  render () {
    const { traHome } = this.props
    const { okex } = traHome
    let options = {
      activeClass:          'active', // the class that is appended to the sections links
      anchors:              ['a', 'b'], // the anchors for each sections
      arrowNavigation:      true, // use arrow keys
      className:            'SectionContainer', // the class name for the section container
      delay:                800, // the scroll animation speed
      navigation:           true, // use dots navigatio
      scrollBar:            false, // use the browser default scrollbar
      sectionClassName:     'Section', // the section class name
      sectionPaddingTop:    '0', // the section top padding
      sectionPaddingBottom: '0', // the section bottom padding
      verticalAlign:        false // align the content of each section vertical
    }
    return (
      <div className={s.traHomeContent}>
        <SectionsContainer {...options}>
          <Section>
            <article>
              <nav>
                <img src={logo} className={s.logo}/>
                <ul className={s.navbarNav}>
                  <li>
                    <a href='/tra/traApi/index.html' target='_blank'>{intl.get('merchantAccess')}</a>
                  </li>
                  <li>
                    <a href='http://poiapi.travel.one/poi_login' target='_blank'>{intl.get('merchantBackstage')}</a>
                  </li>
                  <li>
                    <a href='http://www.zhubaijia.com/' target='_blank'>{intl.get('reservations')}</a>
                  </li>
                  <li>
                    <div className={s.selectLanguage} onClick={() => this.handleClick()}>
                      {intl.get('bannerLabelLanguage')}
                      <ul style={{ display: this.state.selectLanguage ? 'block' : 'none' }}>
                        <li>
                          <a href='javascript:;' onClick={() => this.language('zh-CN')}>中文</a>
                        </li>
                        <li>
                          <a href='javascript:;' onClick={() => this.language('zh_TW')}>翻译中文</a>
                        </li>
                        <li>
                          <a href='javascript:;' onClick={() => this.language('en-US')}>English</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href={this.state.pdf} target='_blank'>{intl.get('bannerBtn')}</a>
                  </li>
                </ul>
              </nav>
              <div className={s.traTitle}>
                <h1>{intl.get('bannerTitle')}</h1>
                <p>{intl.get('bannerTitleDescribe')}</p>
                <span>{intl.get('bannerTitleAddress')}</span>
              </div>
              <div className={s.transactionOkex}>
                <div className={s.details}>
                  <a href='javascript:;'>{intl.get('traHomeLogin')}</a>
                  <div>
                    <span>{intl.get('traHomeLoginCode')}: </span>
                    <span>TRA</span>
                  </div>
                </div>
                { !isUndefined(okex) && !isUndefined(okex.items) && !isUndefined(okex.items.tra_btc) &&
                  <div className={s.traPrice}>
                    <div>
                      <span>TRA/BTC: </span>
                      <span>{okex.items.tra_btc.ticker.last}</span>
                    </div>
                    <div>
                      <span>TRA/ETH: </span>
                      <span>{okex.items.tra_eth.ticker.last}</span>
                    </div>
                    <div>
                      <span>TRA/USDT: </span>
                      <span>{okex.items.tra_usdt.ticker.last}</span>
                    </div>
                  </div>
                }
              </div>
              <div className={s.homeCooperation}>
                <a href='https://www.instagram.com/thetoptravel' target='_blank'>
                  <img src={contactus_t1} />
                </a>
                <a href='https://twitter.com/thetoptravel' target='_blank'>
                  <img src={contactus_t2} />
                </a>
                <a href='javascript:;' target='_blank' id='cooperationCode'>
                  <img src={contactus_t3} />
                </a>
                <a href='https://t.me/Travelcoin' target='_blank'>
                  <img src={contactus_t4} />
                </a>
                <a href='https://github.com/TravelFoundation/' target='_blank'>
                  <img src={contactus_t5} />
                </a>
                <p data-name='businessCooperation'>{intl.get('businessCooperation')}</p>
              </div>
            </article>
            <div className={s.mongoliaLayer}></div>
            <div className={s.back}></div>
          </Section>
          <Section>
            <Video loop muted
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              poster={videoImg} width='100%' height='100%'
              onCanPlayThrough={() => {}}>
              <source src={this.state.videoAd} type="video/webm" />
            </Video>
          </Section>
        </SectionsContainer>
      </div>
    )
  }
}

TraHome.propTypes = {

}

export default TraHome
