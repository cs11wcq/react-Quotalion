import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import Home from './Home'
import QuoteSlider from './QuoteSlider'
import Author from './Tag/Author'
import { Link } from 'react-router-dom'
import QuotesByTag from './QuotesByTag/QuotesByTag'
/* Note: On netlify, if the routing isn't working and you are getting 404 page not found when navigating to different urls, then peep this:
https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa */
const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
          <h2>
            <Link style={{ color: 'red' }} to='/author'>
              Tags
            </Link>
          </h2>
          <Categories />
        </Route>
        <Route exact path='/author' children={<Author />}></Route>
        <Route path='/author/:author_name' children={<QuotesByTag />}></Route>
        <Route path='/category/:category_id' children={<QuoteSlider />}></Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
