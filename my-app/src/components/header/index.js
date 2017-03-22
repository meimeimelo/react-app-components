import React, { Component } from 'react'
import '../../mainstyle.css'
import './headerstyle.css'
import HeaderContainer from './content/header-container'
import NavigatorBar from './navbar/navigator-bar'

class Header extends Component {
  render() {
    return (
      <div>
        <div className='header-logo'>
          <HeaderContainer />
        </div>
        <div className='navbar'>
          <NavigatorBar />
        </div>
      </div>
    )
  }
}

export default Header
