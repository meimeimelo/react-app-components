import React, { Component } from 'react'
import '../../../mainstyle.css';
import '../headerstyle.css'

class NavMenuList extends Component {
  render() {
    const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
    const navItems = items.map( (navItem) =>
      <li className='menu-item' key={navItem.toString()}> { navItem } </li>
    )
    return (
      <div>
        <ul className='menu-list'>
          { navItems }
        </ul>
      </div>
    )
  }
}

export default NavMenuList
