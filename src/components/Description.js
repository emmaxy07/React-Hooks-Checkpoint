import React from 'react'
import { useHistory } from 'react-router-dom'

function Description(props) {

  let history = useHistory()

  return (
    <div>
      <h1>Description</h1>
      <button onClick={() => {history.push("/")}}>Back</button>
    </div>
  )
}

export default Description
