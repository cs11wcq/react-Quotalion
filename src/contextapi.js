import React, { useState, useContext } from 'react'
import { data } from './data/data'
// more components
// fix - context api, redux (for more complex cases)
import categoriesquotes from './data/categories-quotes'
import { allquotes } from './data/quoteslist'
import { useParams, useLocation } from 'react-router-dom'

const PersonContext = React.createContext()

// two components - Provider, Consumer
//k: category_id, v: object containing category_id and children
const categoryMap = new Map()
//k: quote_id, v: object for that quote
const quoteMap = new Map()

categoriesquotes.forEach((item) => {
  categoryMap.set(item.category_id, item)
})
allquotes.forEach((item) => {
  quoteMap.set(item.quote_id, item)
})
console.log(categoryMap)
console.log(quoteMap)

const ContextAPI = () => {
  const category_id = '1A'
  const quoteIds = categoryMap.get(category_id).children
  console.log(quoteIds)
  const quoteObjects = quoteIds.map((quoteId) => {
    return quoteMap.get(quoteId)
  })
  console.log(quoteObjects)
  // const {category_id} = useParams()
  // const query = new URLSearchParams(useLocation().search)

  const [quotes, setQuotes] = useState(quoteObjects)
  const removeQuote = (id) => {
    setQuotes((quotes) => {
      
      return quotes.filter((quote) => {
       console.log(quote.quote_id + ' ' + id)
        return quote.quote_id !== id
      })
    })
  }
  return (
    <PersonContext.Provider
      value={{ removeQuote, quotes, categoryMap, quoteMap }}
    >
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}
function logMapElements(value, key, map) {
  console.log(key + ' ' + JSON.stringify(value))
}

const List = () => {
  const mainData = useContext(PersonContext)
  console.log('mainData ')
  mainData.quoteMap.forEach(logMapElements)

  return (

    <>
      {/* {mainData.categoryMap.forEach(logMapElements)}
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })} */}

      {mainData.quotes.map((quote) => {
        console.log(quote.body)
        return (
          <SinglePerson
            key={quote.quote_id}
            id={quote.quote_id}
            name={quote.body}
          ></SinglePerson>
        )
      })}
      
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removeQuote } = useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removeQuote(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
