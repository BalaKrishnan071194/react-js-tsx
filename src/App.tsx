import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }

}
export default App;
