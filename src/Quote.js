import React, { useContext, useState, useEffect } from 'react'
import categoryQuoteJoin from './data/categoryQuoteJoin'
import { Link, useParams } from 'react-router-dom'
import allquotes from './data/quoteList'
import AppContext from './AppContext'
import './css/QuoteSlider.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Quote = ({ img, body, name, date }) => {

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={img} alt={body} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>

      <p className='info'>{body}</p>
      <p className='job'>{date}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>surprise me</button>
    </article>
  )
}

export default Quote
