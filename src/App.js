import React, { Component } from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Intro from './pages/Intro';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Intro/>
      </div>
    );
  }
}

export default App;
