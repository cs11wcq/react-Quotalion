import React, {useState, useEffect} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const Category = ({...category}) =>{
 const [expand, setExpand] = useState(false)
 const changeExpand = () =>{
  setExpand(!expand)
 }
 return (
   <div className='question header'>
     <div>
       <h3>{category.category}</h3>
     </div>
     <div className='icon-right'>{category.icon}</div>

     {expand && (category.info + " " + <a href='d'>see more</a>)}
     <button className='btn' onClick={changeExpand}>
       {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
     </button>
   </div>
 )
}

export default Category;