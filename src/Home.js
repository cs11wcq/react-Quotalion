import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
      <h1>Home Page</h1>
      <h2>
        <Link to='/categories'>Categories</Link>
      </h2>
    </div>
  )
}

export default Home
