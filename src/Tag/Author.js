import React from 'react'
import '../css/Author.css'
import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import AddAuthor from './AddAuthor'
import ListAuthors from './ListAuthors'
import { Link } from 'react-router-dom'

Amplify.configure(awsconfig)

const Author = () => {
  return (
    <div>
      <header className='App-header'>
        <AmplifySignOut />
      </header>
      <h2>
        <Link style={{ color: 'red' }} to='/'>
          Home
        </Link>
      </h2>
      <div className='home'>
        <h2>Tags</h2>
      </div>
      <h2>
      
        <div>
          <h1>To add a quote, first choose the tag </h1>
        </div>
      </h2>
      <AddAuthor />
      <ListAuthors />
    </div>
  )
}

export default withAuthenticator(Author)
