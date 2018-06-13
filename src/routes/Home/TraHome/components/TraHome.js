import React, { Component } from 'react'
import { isEmpty, isUndefined } from 'lodash/fp'
import { SectionsContainer, Section } from 'react-fullpage'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import intl from 'react-intl-universal'
import { Carousel } from 'antd'

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
import close from '../assets/close.png'

class TraHome extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      scrollBar: false,
      selectLanguage: false,
      initDone: false,
      pdf: '/tra/assets/pdf/Travel_White Paper_cn.pdf',
      videoAd: 'http://www.travel.one/tra/assets/video/video_cn.mp4',
      left: 0,
      right: 0,
      mouse: 0,
      backgroundImage: 'http://simg1.zhubaijia.com/1469674082/PEeRJxzqk6q9mpTpgqo1NvekUUNcUPDu.jpg',
      notice: true
    }
  }

  componentDidMount () {
    const { fetchOkexesTicker, setTitle } = this.props
    setTitle('Travel')
    this.loadLocales()
    fetchOkexesTicker()
    if(location.hash !== '#a' && location.hash !== '') {
      // window.location.href = '/'
    }
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
  hoverOffer (i, type) {
    this.setState({
      backgroundImage: require(`../assets/${type}.jpg`)
    })
  }

  notice () {
    this.setState({
      notice: false
    })
  }

  render () {
    const { traHome, cityData } = this.props
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
      verticalAlign:        false, // align the content of each section vertical
      resetSliders:         true
    }
    return (
      <div className={s.traHomeContent}>
        { !this.state.notice &&
          <div className={s.noticeNarrow}>

          </div>
        }
        { this.state.notice &&
          <div className={s.notice}>
            <div className={s.contentText}>
              <h1>OKEx关于NAS主网切换成功并开放充提的公告</h1>
              <p>鉴于近期个别互联网自媒体披露关于“深圳市住百家发展股份有限公司”（以下简称“住百家公司”）相关文章，其中涉及Travel平台及平台数字代币（TRA）的部分内容对Travel平台造成了不良影响。Travel平台特此声明如下：</p>
              <p>“住百家公司”仅为Travel平台众多业务合作机构之一，并非相关文章所述“Travel平台为‘住百家公司’创立”。与Travel平台业务合作机构还包括Zat Go承云、云雀金服、维纳斯以及中国台湾台北、台南等地区民宿协会等。鉴于业务合作机构实际情况，Travel平台将谨慎评估与“住百家公司”的业务合作事宜。</p>
              <p>对于网络中相关不实报道，Travel平台将保留追究法律责任的权利。</p>
              <span>Travel</span>
              <span>2018年6月13日</span>
              <img src={close} onClick={() => this.notice()}></img>
            </div>
          </div>
        }
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
          { 1 == 2 &&
            <Section>
              <div className={s.offerBack} style={{ backgroundImage: `url(${this.state.backgroundImage})` }}></div>
              <div className={s.offerBackMk}></div>
              <div className={s.offerList}>
                <h1>预订全球美宿</h1>
                <main>
                  { !isUndefined(cityData) && cityData.map((item, i) =>
                    <a href={ '/city_offers/' + item.cityNameEn } target='_blank' onMouseOver={() => this.hoverOffer(i, item.img)} key={i}>
                      <img src={require(`../assets/${item.img}.jpg`)} />
                      <div className={s.make}></div>
                      <div className={s.name}>
                        <p>{item.cityName}</p>
                      </div>
                    </a>
                  )}
                </main>
              </div>
            </Section>
          }
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

TraHome.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TraHome
