import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import UserInfo from './user/UserInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Counter />
        <UserInfo />
      </div>
    );
  }
}

export default App;
