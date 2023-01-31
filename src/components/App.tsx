import React, { Component } from 'react';

import { Header } from './Header';
import './global.css';
 
class App extends Component {
  render() {
    return (
      <>
        <h1>Hello TS-React!</h1>
        <Header />
      </>
    )
  }
}

export default App;