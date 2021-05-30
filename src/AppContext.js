import React from 'react'
import categoriesquotes from './data/categories-quotes'
import {allquotes} from './data/quoteslist'
//k: category_id, v: object containing category_id and children
const categoryMap = new Map()
//k: quote_id, v: object for that quote
const quoteMap = new Map()

categoriesquotes.forEach((item)=> {
 categoryMap.set(item.category_id, item)
})
allquotes.forEach((item) => {
  quoteMap.set(item.quote_id, item)
})
console.log(categoryMap)
console.log(quoteMap);

const AppContext = React.createContext({
 categoryMap: categoryMap,
 quoteMap: quoteMap
})

export default AppContext
