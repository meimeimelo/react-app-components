import React, { Component } from 'react';
import '../../../mainstyle.css';
import '../headerstyle.css'
import HeaderContent from './header-content'

class HeaderContainer extends Component {
  render() {
    return (
      <div className="main-header wrapper">
        <HeaderContent />
      </div>
    )
  }
}

export default HeaderContainer
