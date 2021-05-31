import React, { useState, useContext, useEffect } from 'react'
import './css/QuoteSlider.css'
import Quotes from './Quotes'
import Quote from './Quote'
import categoryQuoteJoin from './data/categoryQuoteJoin'
import categoryList from './data/categoryList'
import { allquotes } from './data/quoteList'
import { useParams } from 'react-router-dom'

//set up the context and the maps
const QuoteContext = React.createContext()
//k: category_id, v: object containing category_id and quote_children
const categoryQuoteMap = new Map()
//k: quote_id, v: object for that quote
const quoteMap = new Map()
const categoryMap = new Map()

categoryQuoteJoin.forEach((item) => {
  categoryQuoteMap.set(item.category_id, item)
})
allquotes.forEach((item) => {
  quoteMap.set(item.quote_id, item)
})
categoryList.forEach((obj) => {
  categoryMap.set(obj.category_id, obj)
})

const QuoteSlider = () => {
  const { category_id } = useParams()
  const quoteIds = categoryQuoteMap.get(category_id).quote_children
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