import React, { Component } from 'react'
import logo from './dog-paw.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: []
    }
    this.btnSort = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
    
    this.filterInput = {
      search: ''
    }
    this.handleInput = this.sortByLetter.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    this.state.breeds.reverse()
  }

 sortByLetter(event) {
    this.setState({ search: event.target.value })
    this.state.breeds.filter(breed => {
      return console.log("input")
      
    })

   


  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list')
      .then(response => response.json())
      .then(({ message }) =>
        this.setState({
          breeds: message
        })
      )
  }

  render() {
   
  
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello! Choose your Dog</h1>
        </header>
        <div className="Btn-wrap">
          <button onClick={this.handleClick} className="Sort-Btn">
            {this.state.isToggleOn ? 'Sort of A-Z' : 'Sort of Z-A'}
          </button>
          <input className="Search-Input" type="text" value={this.filterInput} onChange={this.handleInput} />
        </div>

        <div className="Dogs">
          {this.state.breeds.map((breed, i) => (
            <li className="dogEntry" key={i}>
              {breed}
            </li>
          ))}
        </div>
      </div>
  }
}

export default App
