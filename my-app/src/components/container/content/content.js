import React, { Component } from 'react'
import '../../../mainstyle.css'
import '../containerstyle.css'
import CardSection from './carditem/card'
import ContainerSideBar from './sidebar/container-sidebar'

class MainContent extends Component {
  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='content-section'>
            <CardSection />
            <ContainerSideBar />
            <div className='clear'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent
