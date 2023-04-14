import React, { useEffect, useState } from 'react';


export default function LatihanUseEffect() {
    const [post, setPost] = useState([])

    useEffect(() => {
        const getPost = async ()=> {
           const fetchPost = await fetch('https://jsonplaceholder.typicode.com/posts')
            const getFetch = await fetchPost.json()

            setPost(getFetch)
        }
        getPost()

    },[])

  return (
    <div>
      {
        post.map(phost => 
                <div key={phost.id}>
                    <p>{phost.title}</p>
                    <p>{phost.body}</p>

                </div>
            
                    
        )
      }
    </div>
  )
}
