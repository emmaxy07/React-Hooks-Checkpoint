import React, { useState } from 'react'
import AddMovie from './AddMovie';
import Filter from './Filter';

function MovieCard() {
  const moviesList = [
    {
      title: `The godfather`,
      posterUrl: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg`,
      description: `The aging patriarch of an organized crime 
             dynasty transfers control of his clandestine 
             empire to his reluctant son.`,
      src: `https://www.youtube.com/embed/gaAjDV4Yvbc`,
      rate: 5,
    },
    {
      title: `Fight club`,
      posterUrl: `https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
      description: `An insomniac office worker and 
             a devil-may-care soapmaker form an underground
              fight club that evolves into something much, 
              much more.`,
      src: `https://www.youtube.com/embed/J8FRBYOFu2w`,
      rate: 5,
    },
    {
      title: `The illusionist`,
      posterUrl: `https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg`,
      description: `In turn-of-the-century Vienna, 
             a magician uses his abilities to secure the 
             love of a woman far above his social standing.`,
      src: `https://www.youtube.com/embed/i0xO64icGSY`,
      rate: 4,
    },
    {
      title: `American History X`,
      posterUrl: `https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg`,
      description: `A former neo-nazi skinhead
              tries to prevent his younger brother 
              from going down the same wrong path that he did.`,
      src: `https://www.youtube.com/embed/W2Pq_ij3nPU`,
      rate: 5,
    },
  ];
  const [Movie, setMovie] = useState(moviesList)
  const [input, setInput] = useState('')

  const changeHandler = e => {
    setInput(e.target.value)
  }

  


  return(
    <div>
      <div className="p-5">
      <Filter Movie={Movie}
      changeHandler={changeHandler}
      input={input} />
      </div>
      <br />
      <AddMovie movieList={Movie}/>
    </div>
  )
}

export default MovieCard
