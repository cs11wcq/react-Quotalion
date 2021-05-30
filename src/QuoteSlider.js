import React, { useState, useEffect } from 'react'
import './css/QuoteSlider.css'
import {Quote} from './Quote'
const QuoteSlider = ()=>{
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