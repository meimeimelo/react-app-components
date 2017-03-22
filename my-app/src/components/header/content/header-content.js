import React, { Component } from 'react';
import '../../../mainstyle.css';
import '../headerstyle.css'
import HeaderMainLogo from './header-main-logo'
import HeaderBannerAd from './header-banner-ad'

class HeaderContent extends Component {
  render() {
    return (
      <div>
        <div className='header-container'>
          <HeaderMainLogo />
          <HeaderBannerAd />
        </div>
      </div>
    )
  }
}

export default HeaderContent
