import React, { useState, useContext, useEffect } from 'react'
import Quote from './Quote'
import categoryQuoteJoin from './data/categoryQuoteJoin.json'
import authorList from './data/authorList.json'
import allquotes from './data/quoteList.json'
import { Link, useParams } from 'react-router-dom'
import Error from './Error'
import QuoteContext from './QuoteContext'
import categoryListJson from './data/categoryList.json'

console.log('json ')
console.log(categoryListJson)
//k: category_id, v: object containing category_id and quote_children
const categoryQuoteMap = new Map()
//k: quote_id, v: object for that quote
const quoteMap = new Map()
const categoryMap = new Map()
const authorMap = new Map()
categoryQuoteJoin.forEach((item) => {
  categoryQuoteMap.set(item.category_id, item)
})
allquotes.forEach((item) => {
  quoteMap.set(item.quote_id, item)
})
categoryListJson.forEach((obj) => {
  categoryMap.set(obj.category_id, obj)
})
authorList.forEach((obj) => {
  authorMap.set(obj.author_id, obj)
})

const QuoteSlider = () => {

  const { category_id } = useParams()
  if (categoryQuoteMap.get(category_id) === undefined) return <Error message={'category_id: ' + category_id + ' is invalid'} />

  const quoteIds = categoryQuoteMap.get(category_id).quote_children

  const quoteObjects = quoteIds.map((quoteId) => {
    return quoteMap.get(quoteId)
  })
  //get the author ids for a specific category
  const authorIds = categoryQuoteMap.get(category_id).author_children
  console.log('authorIds: ' + authorIds)
  //get the author objects, which contain the author id, name, and quotes that belong to the author
  const authorObjects = authorIds.map((authorId) => {
    return authorMap.get(authorId)
  })
  console.log(authorObjects)
  return (
    <QuoteContext.Provider value={{ quoteObjects, quoteMap, authorMap }}>
      <main>
        <h2>
          <Link to='/'>Home</Link>
        </h2>
        {/* <h2>
          <Link to='/categories'>Categories</Link>
        </h2> */}
        <section className='container'>
          <div className='title'>
            <h2>{categoryMap.get(category_id).category} quotes</h2>
            <div className='underline'></div>
          </div>
          <div></div>
          <List category_id={category_id} authorObjects={authorObjects} />
        </section>
      </main>
    </QuoteContext.Provider>
  )
}

const List = ({ category_id, authorObjects }) => {
  console.log('category_id' + category_id)

  const q = authorObjects.map((author) => {
    //find the object whose category id matches
    const v = author.quote_children.find((obj) => {
      return obj.category_id === category_id
    })
    console.log(v)
    return v

    // return <Quote key={quote.quoteId} {...quote} />
  })
  console.log(typeof q)
  console.log('q')
  console.log(q)
  //get the array of children quote ids for each author
  const children = q.map((obj) => {
    return obj.children
  })
  console.log(children[0])

  return (
    //each child is an array of quote ids
    <>
      {children.map((child) => {
        //author's quotes for the current category
        return (
          <Quote key={new Date().getTime().toString()} authorQuotes={child} />
        )
      })}
    </>
  )
}

export default QuoteSlider
