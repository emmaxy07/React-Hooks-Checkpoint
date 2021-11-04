import React from 'react'

function Filter({ searchfield, searchChange }) {
  return (
       <div className='pa2'>
        <input 
        type = 'search' 
        placeholder = 'search movies'
        onChange = {searchChange} 
        />
        </div>
  )
}

export default Filter
