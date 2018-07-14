import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import House from './component/house/House'
import Header from './component/header/Header'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { routes }
      </div>
    );
  }
}

export default App;
