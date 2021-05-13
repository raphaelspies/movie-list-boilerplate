import React from 'react';
import movies from '../Data/MovieData.js';
import MovieListView from './MovieListView.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchResult: '',
      movieData: movies
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //handleChange
  handleChange(e) {
    this.setState({
      searchResult: e.target.value
    })
  }

  //handleSubmit
  handleSubmit(e) {
    e.preventDefault()
    var newMovieList = this.filterResults(this.state.searchResult);
    this.setState({
      movieData: newMovieList,
      searchResult: ''
    })
    // console.log(document.getElementById('searchBar').value) Html native get value from form
  }

  //filterResults function that will take in searchResult and return array with filtered where title matches kind of
  filterResults(stringQuery) {
    // debugger;
    var movieData = this.state.movieData
    var result = movieData.filter(entry => {
      return (
        entry.title.indexOf(stringQuery) > -1
      )
    })
    console.log(result)
    if(result.length === 0) {
      return [{title:'no movie by that name found'}]
    }
    return result;
  }


  render() {
    return (
      <div>
        <h1>Movie List</h1>
        {/* Search Bar */}
        <form onSubmit = {this.handleSubmit}>
          <input id="searchBar" type="text" placeholder="type search here" value={this.state.searchResult} onChange={this.handleChange}></input>
          <input type="submit" value="Search"></input>
        </form>
        {/* Movie List View  */}
        <ul>
          <MovieListView movies={this.state.movieData}/>
        </ul>
      </div>
    )
  }
};

export default App;



// const App = (props) => (
//   <div>
//     <h1>Movie List</h1>
//     {/* Search Bar */}
//     <form>
//       <input type="text" placeholder="type search here"></input>
//       <input type="submit" value="Search"></input>
//     </form>
//     {/* Movie List View  */}
//     <ul>
//       <MovieListView movies={movies}/>
//     </ul>
//   </div>
// );