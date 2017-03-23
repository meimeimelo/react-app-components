import React, { Component } from 'react'
import '../../../../../mainstyle.css'
import '../../../containerstyle.css'
import Button from './fetch-btn'

class ButtonSection extends Component {
  render() {
    const { loadData, clearData } = this.props
    return(
      <div className='button-section'>
        <Button btnName={'fetch'} action={ loadData }  />
        <Button btnName={'clear'} action={ clearData } />
      </div>
    )
  }
}

export default ButtonSection
