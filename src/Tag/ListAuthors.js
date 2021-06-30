import { API, graphqlOperation } from 'aws-amplify'
import { listTags } from '../graphql/queries'
import React, { useState, useEffect } from 'react'
import FollowAuthor from './FollowAuthor'
import { Paper} from '@material-ui/core'

const ListAuthors = () => {
 const [authors, setAuthors] = useState([])
 useEffect(() => {
   fetchAuthors()
 }, [authors])
 const fetchAuthors = async () => {
   try {
     const authorData = await API.graphql(graphqlOperation(listTags))
     console.log(authorData.data)
     const authorList = authorData.data.listTags.items
     setAuthors(authorList)
     console.log('author list', authorList)
   } catch (error) {
     console.log('error on fetching authors', error)
   }
 }
 return (
   <div className='authorList'>
     {authors.map((author, idx) => {
       return (
         <Paper variant='outlined' elevation={2} key={`author${idx}`}>
           <div className='authorCard'>
             <div className='authorName'>Author: {author.tag}</div>
             
             <FollowAuthor />
           </div>
         </Paper>
       )
     })}
   </div>
 )
}

export default ListAuthors