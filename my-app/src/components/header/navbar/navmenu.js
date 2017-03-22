import React, { Component, PropTypes } from 'react'
import '../../../mainstyle.css';
import '../headerstyle.css'

class NavMenuList extends Component {
  static proptypes = {
    menuArray: PropTypes.array.isRequired
  }
  static defaultProps = {
    menuArray: []
  }

  render() {
    const { menuArray } = this.props
    const navItems = menuArray.map( (navItem, index) =>
      <li className='menu-item' key={index}> { navItem.title } </li>
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
