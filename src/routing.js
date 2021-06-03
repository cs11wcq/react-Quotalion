import React from 'react'
// react router
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import Home from './Home'
import QuoteSlider from './QuoteSlider'
/* Note: On netlify, if the routing isn't working and you are getting 404 page not found when navigating to different urls, then peep this:
https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa */
const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
          <Categories />
        </Route>
        
        <Route path='/category/:category_id' children={<QuoteSlider />}></Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
