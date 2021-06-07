import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AppContext from './AppContext'

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import QuoteContext from './QuoteContext'

//authorQuotes is an array of quote ids
const Quote = ({ authorQuotes}) => {
  const context = useContext(QuoteContext)
  const quoteId = authorQuotes[0]
  console.log("context quotemap: " + context.quoteMap.get(quoteId).body)
  const [index, setIndex] = useState(0)
  const { body, author_id, date, img } = context.quoteMap.get(authorQuotes[index])

  const checkIndex = (index) => {
    if (index < 0)
      return authorQuotes.length - 1
    if (index >= authorQuotes.length)
      return 0
    return index
  }
  const prevQuote = ()=>{
    setIndex((index)=>{
      return checkIndex(index-1)
    })
  }

  const nextQuote = ()=>{
    setIndex((index)=>{
      return checkIndex(index+1)
    })
  }

  const randomQuote = ()=>{
    let randomNumber = Math.floor(Math.random()*authorQuotes.length)
    if (randomNumber === index) randomNumber = index + 1
    setIndex((index)=>{
      return checkIndex(randomNumber)
    })
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={img} alt={body} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{context.authorMap.get(author_id).name}</h4>

      <p className='info'>{body}</p>
      <p className='job'>{date}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevQuote}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextQuote}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomQuote}>
        surprise me
      </button>
    </article>
  )
}

export default Quote
