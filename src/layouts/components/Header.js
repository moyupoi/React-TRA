import React, { Component } from 'react'

class Header extends Component {

  render () {
    const { faToggleSidebar, faGoBack } = this.props
    const returnVisable = location.pathname !== '/'
    return (
      <div className='header'>
        { returnVisable &&
          <div className='return-outside' onClick={faGoBack}>
            <div className='return'></div>
          </div>
        }
        <h3 className='header-title'></h3>
        <div className='sidebar-toggle-wrap' onClick={faToggleSidebar}>
          <label className='sidebar-toggle'></label>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
}

export default Header
