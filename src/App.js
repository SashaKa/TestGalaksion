import React, { Component } from 'react';
import logo from './dog-paw.svg';
import './App.css';

class App extends Component {
    static filter(breeds, search) {
        const reg = new RegExp(`^${search}`);
        return breeds.filter(el => reg.test(el));
    }

    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            imgUrl: '#',
            isToggleOn: true,
            search: '',
        };
    }

    componentWillMount() {
        fetch('https://dog.ceo/api/breeds/list')
            .then(response => response.json())
            .then(({ message }) => this.setState({ breeds: message, }));
    }

    handleButtonClick = () => {
        const { breeds, isToggleOn } = this.state;
        this.setState({
            breeds: breeds.reverse(),
            isToggleOn: !isToggleOn,
        });
    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleListClick = index => {
        const { breeds } = this.state;
        const breedName = breeds[index];
        fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(response => response.json())
            .then(({ message }) => this.setState({ imageUrl: message }));
    };

    render() {
        const { breeds, imageUrl, isToggleOn, search } = this.state;
        const filteredBreeds = App.filter(breeds, search);
        return <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> Hello! Choose your Dog </h1>
          </header>
          <div className="Controls-wrap">
            <button
                className="Sort-Btn"
                onClick={this.handleButtonClick}
            >
                {isToggleOn ? 'Sort of A-Z' : 'Sort of Z-A'}
            </button>
            <input
                className="Search-Input"
                name="search"
                onInput={this.handleInput}
                type="text"
            />
          </div>
          <div className="Entry-wrap">
            <div className="Dogs-List">
              <ul>{filteredBreeds.map((breed, i) => (
                  <li
                      onClick={() => this.handleListClick(i)}
                      className="dogEntry"
                      key={i}
                  >
                      {breed}
                  </li>
              ))}</ul>
            </div>
            <div className="Dog-Image-wrap">
              <img className="Dog-Image" alt="dog" src={imageUrl} />
            </div>
          </div>
        </div>
    }
}

export default App;
