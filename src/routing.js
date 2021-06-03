import React from 'react'
// react router
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import Home from './Home'
import QuoteSlider from './QuoteSlider'
const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
          <Categories />
        </Route>
        {/* <Route path='/categories'></Route> */}

        <Route path='/category/:category_id' children={<QuoteSlider />}></Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
