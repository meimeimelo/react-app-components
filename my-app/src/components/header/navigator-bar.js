import React, { Component } from 'react'
import '../../style.css'

class NavigatorBar extends Component {
  render() {
    const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
    const navItems = items.map( (navItem) =>
      <li className='menu-item' key={navItem.toString()}> { navItem } </li>
    )
    return (
      <div>
        <div className='main-menu wrapper'>
          <ul className='menu-list'>
            { navItems }
          </ul>
        </div>
      </div>
    )
  }
}

export default NavigatorBar
