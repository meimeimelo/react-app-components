import React, { Component, PropsTypes } from 'react'
import '../../mainstyle.css'
import MainContent from './content/content'

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
