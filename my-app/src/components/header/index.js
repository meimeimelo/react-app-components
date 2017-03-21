import React, { Component } from 'react'
import '../../style.css'
import HeaderContent from './header-content'
import NavigatorBar from './navigator-bar'

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header-logo'>
          <HeaderContent />
        </div>
        <div className='navbar'>
          <NavigatorBar />
        </div>
      </div>
    )
  }
}

export default Header
