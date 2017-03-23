import React, { Component } from 'react'
import '../../../../../mainstyle.css'
import '../../../containerstyle.css'
import FetchButton from './fetch-btn'
import ClearButton from './clear-btn'

class ButtonSection extends Component {
  render() {
    return(
      <div className='button-section'>
        <FetchButton />
        <ClearButton />
      </div>
    )
  }
}

export default ButtonSection
