import React, { Component } from 'react'

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    return (
      <div className='footer'>
        <h3 className='footer-title'>
          咨询热线：6021234
        </h3>
        <p className='footer-info'>Copyright © 2018</p>
      </div>
    )
  }
}
export default Footer
