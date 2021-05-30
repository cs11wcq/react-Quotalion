import React, { useState, useContext } from 'react'
import { data } from './data/data'
// more components
// fix - context api, redux (for more complex cases)
import categoriesquotes from './data/categories-quotes'
import { allquotes } from './data/quoteslist'
import {useParams} from 'react-router-dom'
const PersonContext = React.createContext()

// two components - Provider, Consumer
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


const ContextAPI = () => {
 const {category_id} = useParams()
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <PersonContext.Provider value={{ removePerson, people, categoryMap, quoteMap }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}
function logMapElements(value, key, map) {
  console.log(key + " " + JSON.stringify(value))
}
const List = () => {
  const mainData = useContext(PersonContext)
  console.log(mainData)
  return (
    <>
    {mainData.categoryMap.forEach(logMapElements)}
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
