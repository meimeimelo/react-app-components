import React, { Component } from 'react'
import '../../style.css'
import CardItem from './card-item'

class MainContent extends Component {
  render() {
    return (
      <div>
        <div className='content-section wrapper'>
          <div className='content-box'>
            <div className='content-detail'>
              <CardItem />
            </div>
            <div className='content-sidebar'>
              World
            </div>
            <div className='clear'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent
