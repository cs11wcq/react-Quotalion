import { API, graphqlOperation } from 'aws-amplify'
import { listTags } from '../graphql/queries'
import React, { useState, useEffect, useMemo } from 'react'
import FollowAuthor from './FollowAuthor'
import { Paper} from '@material-ui/core'
import '../css/Author.css'

const ListAuthors = () => {
 const [authors, setAuthors] = useState([])
 useEffect(() => {
   fetchAuthors()
 }, [])
 const fetchAuthors = async () => {
   try {
     //ref: https://docs.amplify.aws/lib/graphqlapi/authz/q/platform/js#using-amplify-graphql-client
     //use IAM auth mode instead of default cognito mode
     const authorData = await API.graphql({
       query: listTags,
       variables: null,
       authMode: 'AWS_IAM',
     })
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
       const link = () => {
         window.open(`/author/${author.tag}`, '_self')
       }
       return (
         <Paper
           onClick={link}
           className='paper'
           variant='outlined'
           key={`author${idx}`}
         >
           <div className='authorCard'>
             <div className='authorName'>
               <h2>Tag: {author.tag}</h2>
             </div>
             <span style={{ display: 'block' }}>
               <FollowAuthor />
             </span>
           </div>
         </Paper>
       )
     })}
   </div>
 )
}

export default ListAuthors