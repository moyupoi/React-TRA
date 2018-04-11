import React, { Component } from 'react'
import { Link } from 'react-router'
import { message } from 'antd'

class Sidebar extends Component {

  constructor (props, context) {
    super(props, context)
    this.signOut = this.signOut.bind(this)
  }

  signOut (e) {
    e.preventDefault()
    this.props.eventToggleSidebar(e)
    this.context.router.push('/')
    message.info('退出成功')
  }

  closeSidebar (e, redirect_path, subName) {
    e.preventDefault()
    this.props.eventToggleSidebar(e)
    this.context.router.push(redirect_path)
  }

  render () {
    return (
      <div className='sidebar-wrapper'>
        <div className='sidebar'>
          <nav className='sidebar-nav'>
            <a href="/tra/signin.html" className='sidebar-nav-item'>aaaa</a>
            <Link to='/' className='sidebar-nav-item' activeClassName='active' onClick={() => this.closeSidebar(event, '/', '首页')}>首页</Link>
            <Link to='/users/sign_in' className='sidebar-nav-item' activeClassName='active' onClick={() => this.closeSidebar(event, '/users/sign_in', '登录/注册')}>登录/注册</Link>
            <Link to='/space' className='sidebar-nav-item' activeClassName='active' onClick={() => this.closeSidebar(event, '/space', '个人资料')}>个人资料</Link>
            <div className='sidebar-item sidebar-footer'>
              <p>
                <a href='javascript:;' onClick={this.signOut}>退出</a>
              </p>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
}

Sidebar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Sidebar
