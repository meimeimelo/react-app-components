import React, { Component, PropTypes } from 'react'
import '../../../mainstyle.css';
import '../headerstyle.css'
import NavItem from './nav-item'

class NavMenuList extends Component {
  static proptypes = {
    menuArray: PropTypes.array.isRequired
  }
  static defaultProps = {
    menuArray: []
  }

  render() {
    const { menuArray } = this.props
    return (
      <div>
        <ul className='menu-list'>
          { menuArray.map( (value, index) =>
            <NavItem key={index} itemName={value.title}/>
          )}
        </ul>
      </div>
    )
  }
}

export default NavMenuList
