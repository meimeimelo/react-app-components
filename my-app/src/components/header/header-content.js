import React, { Component } from 'react';
import '../../style.css';

class HeaderContent extends Component {
  render() {
    return (
      <div>
        <div className='main-header wrapper'>
          <div className='header-container'>
            <div className='main-logo'>
              <h1>I am Wolverine</h1>
            </div>
            <div className='header-ad'>
              <p>This is advertising</p>
            </div>
            <div className='clear'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderContent
