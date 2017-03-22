import React, { Component } from 'react';
import '../../../mainstyle.css';
import '../headerstyle.css'

class HeaderBannerAd extends Component {
  render() {
    return (
      <div>
        <div className='header-ad left text-center'>
          <p>This is advertising</p>
        </div>
        <div className='clear'></div>
      </div>
    )
  }
}

export default HeaderBannerAd
