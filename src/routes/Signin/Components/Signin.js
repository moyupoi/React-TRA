import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Helmet from 'react-helmet'
import cookie from 'react-cookie'

import { bindWechat } from 'tools/bindWechat'
import s from '../assets/Sign.scss'

class Signin extends Component {

  constructor (props) {
    super(props)
    this.state = {
      phone: '',
      code: ''
    }
  }

  componentWillMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  getInput (e) {
    let value = e.target.value
    switch (e.target.id) {
      case 'myPhone':
        if (value.length > 40) break
        this.setState({
          phone: value
        })
        break
      case 'myCode':
        if (value.length > 4) break
        this.setState({
          code: value
        })
        break
      default:
    }
  }


  render () {
    return (
      <div className={s.signContain}>
        <header>登录/注册</header>
        <section>
          <p>
            <input type='text' id='myPhone' placeholder='您的手机' value={this.state.phone} ref='myPhone' onChange={e => this.getInput(e)} />
          </p>
          <p>
            <input type='text' id='myCode' className={s.getCaptchText} placeholder='短信验证码' value={this.state.code} ref='myCode' onChange={e => this.getInput(e)} />
            <input type='button' className={s.getCaptch} value='点击获取' />
          </p>
          <input type='button' className={s.btnLogin} value='注册/登录' />
        </section>
      </div>
    )
  }
}

Signin.propTypes = {

}

Signin.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Signin
