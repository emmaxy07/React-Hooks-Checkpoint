import React from 'react'

function MovieList({Movie}) {
  return (
    <div>
      {
        Movie.map((list,key) => (
          <div key={key}>
            <img src={list.posterURL} alt={list.title} />
            <h3><span>Title:</span>{list.title}</h3>
            <h3><span>Description:</span>{list.description}</h3>
            <h3><span>Rating:</span>{list.rating}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default MovieList
