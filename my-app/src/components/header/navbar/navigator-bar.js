import React, { Component } from 'react'
import '../../../mainstyle.css';
import '../headerstyle.css'
import NavMenuList from './navmenu'

class NavigatorBar extends Component {
  render() {
    return (
      <div>
        <div className='main-menu wrapper'>
          <NavMenuList />
        </div>
      </div>
    )
  }
}

export default NavigatorBar
