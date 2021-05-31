import React, { useState, useContext, useEffect } from 'react'
import './css/QuoteSlider.css'
import Quotes from './Quotes'
import Quote from './Quote'
import categoriesquotes from './data/categories-quotes'
import categorieslist from './data/categorieslist'
import { allquotes } from './data/quoteslist'
import { useParams } from 'react-router-dom'

//set up the context and the maps
const QuoteContext = React.createContext()
//k: category_id, v: object containing category_id and children
const categoryQuoteMap = new Map()
//k: quote_id, v: object for that quote
const quoteMap = new Map()
const categoryMap = new Map()

categoriesquotes.forEach((item) => {
  categoryQuoteMap.set(item.category_id, item)
})
allquotes.forEach((item) => {
  quoteMap.set(item.quote_id, item)
})
categorieslist.forEach((obj)=>{
  categoryMap.set(obj.category_id, obj)
})

const QuoteSlider = () => {
  const { category_id } = useParams()
  const quoteIds = categoryQuoteMap.get(category_id).children
  console.log(quoteIds)
  const quoteObjects = quoteIds.map((quoteId) => {
    return quoteMap.get(quoteId)
  })
  console.log(quoteObjects)

  return (
    <QuoteContext.Provider value={{ quoteObjects, categoryQuoteMap, quoteMap }}>
      <main>
        <section className='container'>
          <div className='title'>
            <h2>{categoryMap.get(category_id).category} quotes</h2>
            <div className='underline'></div>
          </div>
          <List />
        </section>
      </main>
    </QuoteContext.Provider>
  )
}

const List = () => {
  const mainData = useContext(QuoteContext)
  console.log(mainData)
  return (
    <div>
      {mainData.quoteObjects.map((quote) => {
        return <Quote key={quote.quoteId} {...quote} />
      })}
    </div>
  )
}

export default QuoteSlider
