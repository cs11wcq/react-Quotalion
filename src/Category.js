import React, { useState, useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
const Category = ({ ...category }) => {
  const [expand, setExpand] = useState(false)
  const changeExpand = (event) => {
    event.stopPropagation()
    setExpand(!expand)
  }
  const link = () => {
    window.open(`/category/${category.category_id}`, '_self')
  }
  const elipses = () => {
    if (!expand)
    {
      if (category.info.length > 100)
        return category.info.substr(0, 100) + '...'
      return category.info
    }
      
  }
  console.log(useParams())
  return (
    <div className='question header' onClick={link}>
      <div className='fill'>
        <img src={category.gif} alt='' />
      </div>

      <span style={{ display: 'block' }}>
        <div>
          <h3>{category.category}</h3>
        </div>
        <div className='icon-right'>{category.icon}</div>
        {elipses()}
        {expand && category.info}
        {/* {expand && <WebLink category={category} />} */}
        <button className='btn' onClick={changeExpand}>
          {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </span>
    </div>
  )
}

// const WebLink = ({ category }) => {
//   return <Link to={`/category/${category.category_id}`}>Link</Link>
// }

export default Category
