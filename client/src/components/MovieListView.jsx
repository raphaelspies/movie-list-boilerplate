import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

var MovieListView = (props) => {
  console.log(props)
  return (
    <div>
      {props.movies.map((obj, index) => (
        <MovieListEntry movie={obj} key={index} />
      ))}
    </div>
  )
}


export default MovieListView