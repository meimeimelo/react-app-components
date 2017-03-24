import React, { Component } from 'react'
import '../../../../../mainstyle.css'
import '../../../containerstyle.css'
import Button from './fetch-btn'

class ButtonSection extends Component {
  render() {
    const { loadData, clearData } = this.props
    return(
      <div className='button-section'>
        <Button btnName={'Fetch'} action={ loadData }  />
        <Button btnName={'Clear'} action={ clearData } />
      </div>
    )
  }
}

export default ButtonSection
