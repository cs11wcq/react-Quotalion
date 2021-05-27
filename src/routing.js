import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './categories'
import Home from './Home'
const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/categories'>
         <Categories/>
        </Route>
        <Route></Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
