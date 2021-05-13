import React from 'react';

var MovieListView = (props) => {
  console.log(props)
  return (
    <div>
      {props.movies.map((obj, index) => (
        <li key={index}>{obj.title}</li>
      ))}
      HELLO
    </div>
  )
}


export default MovieListView