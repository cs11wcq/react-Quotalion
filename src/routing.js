import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import Home from './Home'
import QuoteSlider from './QuoteSlider'
import ContextAPI from './contextapi'
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

        <Route path='/category/:category_id' children={<QuoteSlider/>}></Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
