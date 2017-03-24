import React, { Component } from 'react'
import '../../../mainstyle.css';
import '../headerstyle.css'

class NavItem extends Component {
  render() {
    const  { itemName }  = this.props

    return (
      <li className="menu-item">
        { itemName }
      </li>
    )
  }
}

export default NavItem
