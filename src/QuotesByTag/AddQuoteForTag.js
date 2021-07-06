// import * as React from 'react'
import { Link } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import uuid from 'react-uuid'
import {createQuote} from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'
/*
const array = ['one', 'two', 'three']

export const LineItem = item => <li key={uuid()}>{item}</li>

export const List = () => array.map(item => <LineItem item={item} />)
*/
const AddQuoteForTag = ({ author_name }) => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState(author_name)
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(quote, author, image, date)
    if (quote && author) {
      //quoteMap, authorMap, categoryQuoteMap
      //authorList, categoryQuoteJoin, allquotes
      addQuote()
    } else {
      window.alert('Please enter a valid quote')
    }
  }
  const reset = () => {
    setQuote('')
    setImage('')
    setDate('')
  }

  const addQuote = async () => {
    try {
      const quo = { body: author, type: 'QUOTE', imageUrl: image,  }
      const data = await API.graphql(
        graphqlOperation(createQuote, { input: quo })
      )
    } catch (error) {
      console.log('error trying to add quote', error)
    }
  }
  return (
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='quote'>Quote: </label>
          <textarea
            rows='7'
            id='quote'
            name='quote'
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='firstName'>Tag: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={author}
            // onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='image'>Image URL: </label>
          <input
            type='text'
            id='image'
            name='image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {/* <div className='form-control'>
          <label htmlFor='date'>Date: </label>
          <input
            type='date'
            id='date'
            name='image'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div> */}
        <button type='submit'>Add quote</button>
        {/* <button type='reset'>Cancel</button> */}
        <button onClick={()=>reset()}>Cancel</button>
      </form>
    </article>
  )
}

export default AddQuoteForTag

