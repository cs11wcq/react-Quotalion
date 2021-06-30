import React, { useState, useEffect } from 'react'
import './css/Author.css'
import { Link } from 'react-router-dom'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports'
import { listTags } from './graphql/queries'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { Paper, IconButton } from '@material-ui/core'
import { updateAuthors } from './graphql/mutations'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

Amplify.configure(awsconfig)

const Author = () => {
  const [authors, setAuthors] = useState([])
  useEffect(() => {
    fetchAuthors()
  }, [])
  const fetchAuthors = async () => {
    try {
      const authorData = await API.graphql(graphqlOperation(listTags))
      console.log(authorData.data);
      const authorList = authorData.data.listTags.items
      setAuthors(authorList)
      console.log('author list', authorList)
    } catch (error) {
      console.log('error on fetching authors', error)
    }
  }

  return (
    <div>
      <header className='App-header'>
        <AmplifySignOut />
      </header>
      <div className='home'>
        <h2>Authors</h2>
      </div>

      <div className='authorList'>
        {authors.map((author, idx) => {
          return (
            <Paper variant='outlined' elevation={2} key={`author${idx}`}>
              <div className='authorCard'>
                  <div className='authorName'>Author: {author.tag}</div>
                  <IconButton aria-label='Follow'>
                    <PersonAddIcon />
                  </IconButton>
              </div>
            </Paper>
          )
        })}
      </div>
    </div>
  )
}

export default withAuthenticator(Author)
