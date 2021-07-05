import {API, graphqlOperation} from 'aws-amplify'
import { createTag } from '../graphql/mutations'
import React, {useState} from 'react'


const AddAuthor = () => {
  const [author, setAuthor] = useState('')

 const addAuthor = async () => {
   try {
     const tag = { tag: author }
     const data = await API.graphql(graphqlOperation(createTag, { input: tag }))
   } catch (error) {
     console.log('error trying to add author', error)
   }
 }
 return (
   <div className='addAuthor'>
     <input type='text' onChange={(e) => setAuthor(e.target.value)} />
     <button onClick={() => addAuthor()}>Add Tag</button>
   </div>
 )
}

export default AddAuthor

