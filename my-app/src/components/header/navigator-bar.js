import React, { Component } from 'react'
import '../../style.css'

class NavigatorBar extends Component {
  render() {
    return (
      <div>
        <div className='main-menu wrapper'>
          <ul className='menu-list'>
            <li className='menu-item'> item1 </li>
            <li className='menu-item'> item2 </li>
            <li className='menu-item'> item3 </li>
            <li className='menu-item'> item4 </li>
            <li className='menu-item'> item5 </li>
            <li className='menu-item'> item6 </li>
            <li className='menu-item'> item7 </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavigatorBar
