import React from 'react';
import movies from '../Data/MovieData.js';
import MovieListView from './MovieListView.jsx';

const App = (props) => (
  <div>
    <h1>Movie List</h1>
    <ul>
      <MovieListView movies={movies}/>
    </ul>
  </div>
);

export default App;