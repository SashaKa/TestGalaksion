import React, { Component } from 'react';
import logo from './dog-paw.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: [],
    };
  }

ComponentDidMount() {
   fetch('https://dog.ceo/api/breeds/list/all')
  .then(results => {
    return results.json();
  }).then (data => {
    let dogs = data.results.map((dogs) => {
      return (
      <div key={dogs.results}>
      <h3 className="Test-title">Go!</h3>
      </div>
    ) 
    })
    this.setState({dogs: dogs});
    console.log('state', this.state.message);
  })
}


  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello! Choose your Dog</h1>
        </header>
        <p className="App-intro">choose here</p>
        <div className="Dogs">{this.state.message}</div> 
      </div>
  }
}

export default App;
