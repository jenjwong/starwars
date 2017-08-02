import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';

class App extends Component {
  state = {
    titles: []
  }
  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then((data) => {
      const movieTitles = data.results.map(movie => movie.title);
      this.setState({
        titles: movieTitles,
      });
    })
    .catch(error => console.error(`error in fetch messages ${error}`));
  }
  render() {
    return (
      <div className="App">
        <MovieList titles={this.state.titles} />
      </div>
    );
  }
}

export default App;
