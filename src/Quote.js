import React, {useContext, useState, useEffect } from 'react'
import categoriesquotes from './data/categories-quotes'
import { Link, useParams } from 'react-router-dom'
import allquotes from './data/quoteslist'
import AppContext from './AppContext'
import './css/QuoteSlider.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Quote = ({img, body, author, topic}) => {
  // const { category_id } = useParams() //get the string category id from the url (make sure to convert to int)
  // const appContext = useContext(AppContext)
  // console.log("Category " + appContext.categoryMap);
  // console.log('Quote ' + appContext.quoteMap)
  // const [quotesFromCategory, setQuotesFromCategory] = useState([])
  // useEffect(() => {
  //   const category = categoriesquotes.find((obj) => {
  //     return obj.category_id === category_id
  //   })
  //   setQuotesFromCategory(category.children)
  // },[])

  // console.log(useParams());
  // console.log(category);
  // console.log(quotesFromCategory);


  return (
    <article className='review'>
      <div className='img-container'>
        <img src={img} alt={body} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{author}</h4>
      <p className='job'>{topic}</p>
      <p className='info'>{body}</p>
      <div className='button-container'>
        <button className='prev-btn' >
          <FaChevronLeft />
        </button>
        <button className='next-btn' >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' >
        surprise me
      </button>
    </article>
  )
}



export default Quote