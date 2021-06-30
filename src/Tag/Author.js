import React from 'react'
import '../css/Author.css'
import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import AddAuthor from './AddAuthor'
import ListAuthors from './ListAuthors'

Amplify.configure(awsconfig)

const Author = () => {

  return (
    <div>
      <header className='App-header'>
        <AmplifySignOut />
      </header>
      <div className='home'>
        <h2>Authors</h2>
      </div>

      <AddAuthor/>
      <ListAuthors/>
      
    </div>
  )
}

export default withAuthenticator(Author)
