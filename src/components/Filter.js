import React from 'react'

function Filter({Movie, changeHandler, input}) {
  return (
    <div>
      <input type="text" 
      placeholder="Search"
      onChange={changeHandler} />
      {
        Movie.filter((movie) => {
          if(input === ""){
            return null
          } else if(movie.title.toLowerCase().
          includes(input.toLowerCase())){
            return movie
          }
        }).map((movie,key)=>(
          <div key={key}>
            <p>{movie.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Filter
