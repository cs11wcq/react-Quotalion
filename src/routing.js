import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import Home from './Home'
import Category from './Category'
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

        <Route path='/category/:id' children={<Category/>}></Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
