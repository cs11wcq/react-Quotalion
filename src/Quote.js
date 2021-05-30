import React, {useContext, useState, useEffect } from 'react'
import categoriesquotes from './data/categories-quotes'
import { Link, useParams } from 'react-router-dom'
import allquotes from './data/quoteslist'
import AppContext from './AppContext'

export const Quote = () => {
  const { category_id } = useParams() //get the string category id from the url (make sure to convert to int)
  const appContext = useContext(AppContext)
  console.log("Category " + appContext.categoryMap);
  console.log('Quote ' + appContext.quoteMap)
  const [quotesFromCategory, setQuotesFromCategory] = useState([])
  useEffect(() => {
    const category = categoriesquotes.find((obj) => {
      return obj.category_id === category_id
    })
    setQuotesFromCategory(category.children)
  },[])

  // console.log(useParams());
  // console.log(category);
  // console.log(quotesFromCategory);
  return (
    <div>Quote {quotesFromCategory.join(",")}</div>
    // <article className='review'>
    //   <div className='img-container'>
    //     <img src={image} alt={name} className='person-img' />
    //     <span className='quote-icon'>
    //       <FaQuoteRight />
    //     </span>
    //   </div>
    //   <h4 className='author'>{name}</h4>
    //   <p className='job'>{job}</p>
    //   <p className='info'>{text}</p>
    //   <div className='button-container'>
    //     <button className='prev-btn' onClick={prevPerson}>
    //       <FaChevronLeft />
    //     </button>
    //     <button className='next-btn' onClick={nextPerson}>
    //       <FaChevronRight />
    //     </button>
    //   </div>
    //   <button className='random-btn' onClick={randomPerson}>
    //     surprise me
    //   </button>
    // </article>
  )
}

