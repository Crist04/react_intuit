import React,{useEffect,useState} from 'react';
import axios from 'axios';

function FetchingHook() {
    //to fetch all the data
    //const [posts,setposts]=useState([])
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButton,setIdFromButton]=useState(1)

    const handleClick=()=>{
        setIdFromButton(id)
    }

   useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(response=>{
            console.log(response);
            setPost(response.data)
        })
        .catch(err=>{
            console.log(err);
        })
        //pass empty dependency ([]) to fetch data for particular id pass id to dependency
    },[idFromButton])

        return(
            <div>
                <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
                <button type='button' onClick={handleClick}>Fetch Post</button>
                <div>{post.title}</div>
                {/* to fectch all the data */}
               {/* <ul>
                {
                    posts.map(post=>
                    <li key={post.id}>{post.title}</li>)
                }
               </ul> */}
            </div>
        )
    
}
export default FetchingHook;