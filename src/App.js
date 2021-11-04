import React, { useState, useEffect} from 'react'
import MovieList from './components/MovieList'
import Filter from './components/Filter'

const App = () => {
   const [movieList, setMovieList] = useState()
   const [searchWord, setSearchWord] = useState('');
   const [ratingSearch, setRatingSearch] = useState(0);

   const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
   const handleSearch = (e) => setSearchWord(e.target.value);


  return(
    <div>
      <Filter 
      handleSearch={handleSearch}
      setRatingSearch={setRatingSearch}
      ratingSearch={ratingSearch} />
      <MovieList 
       moviesArray={
        searchWord
          ? movieList.filter((movie) =>
              movie.title.toLowerCase().includes(searchWord.toLowerCase())
            )
          : ratingSearch > 1
          ? movieList.filter((movie) => movie.rate >= ratingSearch)
          : movieList
        } />
          {/* <AddMovie handleAdd={addMovie} /> */}
    </div>
  )
}

export default App