import React from 'react'
import AddMovie from './AddMovie'

function MovieList({Movie}) {
  return (
    <div>
      {
        Movie.map((list) => (
          <div className="container my-4 col-md-4" key={list.title}>
            <div className="row">
            <div className="card">
            <img className="img-fluid card-img-top" src={list.posterUrl} alt={list.title} />
            <div className="card-body">
            <h3><span>Title: </span>{list.title}</h3>
            <h3><span>Description: </span>{list.description}</h3>
            <h3><span>Rating: </span>{list.rate}</h3>
            </div>
            </div>
            </div>
          </div>
        ))
      }
      {/* <AddMovie movieList={Movie}/> */}
    </div>
  )
}

export default MovieList
