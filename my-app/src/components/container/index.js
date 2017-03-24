import React, { Component } from 'react'
import '../../mainstyle.css'
import MainContent from './content/content'

class Container extends Component {
  render() {
    return (
      <div className="main-content">
        <MainContent />
      </div>
    )
  }
}

export default Container
