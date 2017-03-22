import React, { Component } from 'react';
// import logo from './logo.svg';
import './mainstyle.css';
import Header from './components/header'
import Container from './components/container'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
