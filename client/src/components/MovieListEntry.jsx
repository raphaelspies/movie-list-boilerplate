import React from 'react';

var MovieListEntry = (props) => {
  return (
    <li>
      {props.movie.title}
    </li>
  )
}

export default MovieListEntry;