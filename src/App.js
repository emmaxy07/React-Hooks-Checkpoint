import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Description from './components/Description'
import MovieCard from './components/MovieCard'

const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route path="/description" exact>
            <Description/>
          </Route>
          <Route path="/" exact>
          <MovieCard />
          </Route>
       </Switch> 
       
</div>
</Router>
  )
}

export default App