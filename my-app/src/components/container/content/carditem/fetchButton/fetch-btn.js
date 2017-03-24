import React, { Component } from 'react'
import '../../../../../mainstyle.css'
import '../../../containerstyle.css'

class FetchButton extends Component {
  render(){
    const { btnName, action } = this.props
    return(
        <button className='load-btn btn' onClick={action}>{btnName}</button>
    )
  }
}

export default FetchButton
