import React, { Component } from 'react'
import '../../style.css'
import MainContent from './content'

class Container extends Component {
  render() {
    return (
      <div>
        <div className='main-content'>
          <MainContent />
        </div>
      </div>
    )
  }
}

export default Container
