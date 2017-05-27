import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';
import JobList from './JobList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <TopBar />
        <JobList />
      </div>
    );
  }
}

export default App;
