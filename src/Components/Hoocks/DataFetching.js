import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetching() {

    const [post, setPost]=useState([]);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res=>{console.log(res)
            setPost(res.data)

        }, []);
        
    })
  return (
    <div>
        Data Featching

        <ul>
            {post.map(post=>(
                <li key={post.key}>{post.title}</li>

                
            ))}
        </ul>
      
    </div>
  )
}

export default DataFetching
