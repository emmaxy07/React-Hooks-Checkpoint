import React, { useState } from "react";
import MovieList from "./MovieList";

function AddMovie ({ movieList }) {
  const [movie, setMovie] = useState(movieList);
  const [title, setTitle] = useState('')
  const [posterUrl, setPosterUrl] = useState('')
  const [description, setDescription] = useState('')
  const [rate, setRate] = useState('')

  const handleClick = () => {
      // update the movies state property by adding a new movie
      setMovie([...movie, { title: title, posterUrl: posterUrl, description: description, rate: rate}]);
      setTitle('')
      setPosterUrl('')
      setDescription('')
      setRate('')
  }
  
  return (
    <div>
       <div className="col-auto">
                  <input type="text" className="form-control" onChange={(event) => setTitle(event.target.value)} value={title}  placeholder="Title" />
                </div>               
                <div className="col-auto">
                  <input type="text" className="form-control" onChange={(event) => setPosterUrl(event.target.value)} value={posterUrl}  placeholder="poster url" />
                </div>
               <div className="col-auto">
                  <input type="text" className="form-control" onChange={(event) => setDescription(event.target.value)} value={description}  placeholder="Description" />
                </div>
                <div className="col-auto">
                  <input type="number" className="form-control" onChange={(event) => setRate(event.target.value)} value={rate}  placeholder="Rate" />
                </div>
                <div className="col-auto">
                  <button type="button" onClick={handleClick} className="btn btn-primary mb-3">Submit</button>
                </div>
                <MovieList Movie={movie} />
    </div>
  );
}

export default AddMovie