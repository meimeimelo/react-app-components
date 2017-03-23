import React, { Component } from 'react'
import '../../../../../mainstyle.css'
import '../../../containerstyle.css'

class Button extends Component {
  render(){
    const { btnName, action } = this.props

    return(
        <button onClick={action}>{ btnName }</button>
    )
  }
}

export default Button
