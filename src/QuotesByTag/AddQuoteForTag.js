// import * as React from 'react'
import { Link } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import uuid from 'react-uuid'
/*
const array = ['one', 'two', 'three']

export const LineItem = item => <li key={uuid()}>{item}</li>

export const List = () => array.map(item => <LineItem item={item} />)
*/
const AddQuoteForTag = ({ category_id }) => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(quote, author, image, date)
    if (quote && author) {
      //quoteMap, authorMap, categoryQuoteMap
      //authorList, categoryQuoteJoin, allquotes
    } else {
      window.alert('Please enter a valid quote')
    }
  }
  const reset = () => {
    setQuote('')
    setAuthor('')
    setImage('')
    setDate('')
  }
  return (
    <article>
      <form className='form' onSubmit={handleSubmit} onReset={reset}>
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
            onChange={(e) => setAuthor(e.target.value)}
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
        <div className='form-control'>
          <label htmlFor='date'>Date: </label>
          <input
            type='date'
            id='date'
            name='image'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type='submit'>Add quote</button>
        <button type='reset'>Cancel</button>
      </form>
    </article>
  )
}

export default AddQuoteForTag

