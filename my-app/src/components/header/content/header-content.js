import React, { Component } from 'react';
import '../../../mainstyle.css';
import '../headerstyle.css'
import HeaderMainLogo from './header-main-logo'
import HeaderBannerAd from './header-banner-ad'

class HeaderContent extends Component {
  render() {
    return (
      <div className="header-container">
        <HeaderMainLogo />
        <HeaderBannerAd />
        <div className="clear"></div>
      </div>
    )
  }
}

export default HeaderContent
