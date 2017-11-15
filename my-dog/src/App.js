import React, { Component } from 'react';
import logo from './dog-paw.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: []
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(responce => responce.json())
      .then(data=>this.setState ({status:data.status}))
  }  


  render() {
    // const {status} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello! Choose your Dog</h1>
        </header>
        <p className="App-intro">choose here</p>
        <div className="Dogs">
        <a href='{this.state.message}'>TEST DOG</a></div>
      </div>
    )
  }
}

export default App;
