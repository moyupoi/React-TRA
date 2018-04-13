import React, { Component } from 'react'
import classNames from 'classnames'
import { browserHistory } from 'react-router'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../../styles/core.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
    this.setScrollTop = this.setScrollTop.bind()
    this.goBack = this.goBack.bind(this)
    this.wxSign = this.wxSign.bind(this)
    this.state = {
      sidebarOpen: false
    }
  }

  componentWillMount () {

  }

  componentDidMount () {
    let ua = navigator.userAgent.toLowerCase()
    if(ua.match(/MicroMessenger/i)) {
      this.props.wechat(encodeURIComponent(window.location.href))
    }
  }

  componentWillUnmount () {

  }

  componentWillReceiveProps (nextProps) {
    // if (nextProps.common.wechat.info !== undefined && nextProps.common.wechat.info.sign_package !== undefined) {
    //   debugger
    //   if (nextProps.common.wechat.info.sign_package) {
    //     this.wxSign(nextProps.common.wechat.info.sign_package)
    //   }
    // }
  }

  eventCloseSidebar (e) {
    if (this.state.sidebarOpen === true) {
      this.eventToggleSidebar(e)
    }
  }

  eventToggleSidebar (e) {
    e.preventDefault()
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }

  setScrollTop () {
    document.body.scrollTop = 0
  }

  goBack (e) {
    e.preventDefault()
    return browserHistory.goBack()
  }

  wxSign (info) {
    wx.config({
      debug: false,
      appId: info.app_id,
      timestamp: info.timestamp,
      nonceStr: info.nonce_str,
      signature: info.signature,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
      ]
    })
  }

  render () {
    const layoutClass = classNames('wrapper', {open: this.state.sidebarOpen})
    return (
      <div className={layoutClass}>
        <div className='back-top' onClick={this.setScrollTop} style={this.state.backTopVisible ? {display: 'block'} : {display: 'none'}}></div>
        <Sidebar eventToggleSidebar={this.eventToggleSidebar} />
        <div className='sidebar-mask' onClick={this.eventCloseSidebar}></div>
        <div className='wrap' id='wrap' onClick={this.eventCloseSidebar}>
          { location.pathname.indexOf('/') < 0 &&
            <Header faToggleSidebar={this.eventToggleSidebar} faGoBack={this.goBack} />
          }
          <div className='container content'>
            {this.props.children}
          </div>
          { location.pathname.indexOf('/') < 0 &&
            <Footer/>
          }
        </div>

      </div>

    )
  }
}

App.propTypes = {

}

export default App
