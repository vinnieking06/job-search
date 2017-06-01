import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';
import JobListContainer from './JobListContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <TopBar />
        <JobListContainer />
      </div>
    );
  }
}

export default App;
