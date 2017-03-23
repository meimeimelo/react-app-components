import React, { Component } from 'react'
import '../../../mainstyle.css'
import '../containerstyle.css'
import $ from 'jquery'
import CardSection from './carditem/card'
import ContainerSideBar from './sidebar/container-sidebar'

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardDataArray: []
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    const root = 'https://jsonplaceholder.typicode.com'
    $.ajax({
      url: root + '/posts',
      dataType: 'json',
      method: 'GET'
    }).then((data) => {
      console.log(data)
      // const title = data.map((da) => da.title)
      // console.log(title)
      this.setState({ cardDataArray: data })
    }).catch(console.log)
  }

  clearData() {
    this.setState({ cardDataArray: [] })
  }

  render() {
      return (
        <div>
          <div className='wrapper'>
            <div className='content-section'>
              <CardSection dataListArray={this.state.cardDataArray} loadData={this.loadData.bind(this)} clearData={this.clearData.bind(this)} />
              <ContainerSideBar />
              <div className='clear'></div>
            </div>
          </div>
        </div>
      )
  }
}

export default MainContent
