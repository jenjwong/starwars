import React from 'react';
import MovieItem from './MovieItem';

const MovieList = props => (
  <div className="movie-container">
    {props.titles.map(title => <MovieItem key={title} title={title} />)}
  </div>
  );


export default MovieList;
