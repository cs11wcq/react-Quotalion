import React, { useState, useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
const Category = ({ ...category }) => {
  const [expand, setExpand] = useState(false)
  const changeExpand = () => {
    setExpand(!expand)
  }
  
  console.log(useParams())
  return (
    <div className='question header'>
      <div>
        <h3>{category.category}</h3>
      </div>
      <div className='icon-right'>{category.icon}</div>

      {expand && category.info}
      {expand && <WebLink category={category} />}
      <button className='btn' onClick={changeExpand}>
        {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </div>
  )
}

const WebLink = ({ category }) => {
  return <Link to={`/category/${category.category_id}`}>Link</Link>
}

export default Category
