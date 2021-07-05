import { API, graphqlOperation } from 'aws-amplify'
import { listQuotes } from '../graphql/queries'
import React, { useState, useEffect, useMemo } from 'react'
import FollowAuthor from '../Tag/FollowAuthor'
import { Paper } from '@material-ui/core'
import '../css/Author.css'

const ListQuotes = () => {
  const [quotes, setQuotes] = useState([])
  useEffect(() => {
    fetchQuotes()
  }, [])
  const fetchQuotes = async () => {
    try {
      const quoteData = await API.graphql(graphqlOperation(listQuotes))
      console.log(quoteData.data)
      const quoteList = quoteData.data.listQuotes.items
      setQuotes(quoteList)
      console.log('quote list', quoteList)
    } catch (error) {
      console.log('error on fetching authors', error)
    }
  }

  return (
    <div className='quoteList'>
      
      {quotes.map((quote, idx) => {
        return (
          <Paper
            onClick={link}
            className='paper'
            variant='outlined'
            key={`quote${idx}`}
          >
            <div className='authorCard'>
              <div className='authorName'>
                <h2>Quote: {quote.body}</h2>
              </div>
            </div>
          </Paper>
        )
      })}
    </div>
  )
}

export default ListQuotes
