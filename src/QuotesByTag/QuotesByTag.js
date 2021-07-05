import React from 'react'
import '../css/Author.css'
import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import FollowAuthor from '../Tag/FollowAuthor'
import { Link, useParams } from 'react-router-dom'
import AddQuoteForTag from './AddQuoteForTag'

Amplify.configure(awsconfig)

const QuotesByTag = () => {
 const { author_name } = useParams()
  return (
    <div>
      <header className='App-header'>
        <AmplifySignOut />
      </header>
      {/*  tip:
      https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/*/}
      <h2>
        <Link
          style={{ color: 'red', display: 'block', border: '3px solid black' }}
          to='/'
        >
          Home
        </Link>
        <Link
          style={{ color: 'gold', display: 'block', border: '3px solid black' }}
          to='/author'
        >
          Back to Tag List
        </Link>
      </h2>
      <div className='home'>
        <h2>Quotes by {author_name}</h2>
        <span style={{ display: 'block' }}>
          <FollowAuthor />
          <AddQuoteForTag/>
        </span>
      </div>
      {/* <AddAuthor />
      <ListAuthors /> */}
    </div>
  )
}

export default withAuthenticator(QuotesByTag)
