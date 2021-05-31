import React, { useState, useEffect } from 'react'
import './css/QuoteSlider.css'
import {Quote} from './Quote'
import { useParams } from 'react-router-dom'
const QuoteSlider = ()=>{
  const { categoryid } = useParams()
  console.log(useParams());
 return (

   <main>
     <section className='container'>
       <div className='title'>
         <h2>our reviews</h2>
         <div className='underline'></div>
       </div>
       <Quote />
     </section>
   </main>
 )
}



export default QuoteSlider