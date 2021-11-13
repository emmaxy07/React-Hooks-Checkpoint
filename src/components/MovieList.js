import React from 'react'
import { Link } from 'react-router-dom'
import Description from './Description'

function MovieList({Movie}) {
  const description = (list) => (
    <Description list={list} />
  )
  return (
    <div>
       {/* { Movie.map((list)=>(
          <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{list.description}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{list.src}</p>
      </div>
    </div>
  </div>
</div>
        ))} */}
      {
        Movie.map((list) => ( 
          <div className="container my-4" key={list.title}>
            <div  className="">
            <div className="card">
              <Link to='/description' >
            <img className="img-fluid card-img-top" src={list.posterUrl} alt={list.title} />
            </Link>
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
    </div>
  )
}

export default MovieList
