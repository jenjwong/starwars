import React from 'react';
import Star from './Star';

const MovieItem = props => (
  <div className="movie-item-container">
    <img className="poster" src="http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/star-wars-force-awakens-official-poster.jpg" alt="movie-poster" />
    <div className="title">Star Wars: {props.title}</div>
    <div> {Array(5).fill(0).map((star, index) => <Star index={index} key={index} />)}</div>
    <div className="prices"><span className="original-price">$22.95</span><span className="reduced-price">$15.00</span></div>
    <button className="add-to-cart">Add To Cart</button>
  </div>
);

export default MovieItem;
