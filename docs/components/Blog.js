// import {Route} from 'react-route-dom'
import React, {useState} from 'react'

function Blog() {
    const [post, setPost] = useState([])
    const [input, setInput] = useState('')
    


        const blogPostHandler = (e)=>{
            setInput(e.target.value)
            console.log(post)
        }

        const addPost = (e, newPost) => {
            e.preventDefault()
            setPost([...post, newPost])
        }
    
        const displayPost = () =>{
            if(post.length>0){
                console.log(post)
                return(post.map((post, index)=>{
                    return(
                    <p>{post}</p>
                    )
                }))
                
            }else{
                return(
                    <h3>This is where blog posts will be</h3>
                )
            }
        }

    return (
        <div className='Blog'>
            {displayPost()}
            <form>
                <input onChange={(event) => blogPostHandler(event)} type='text' placeholder='Type post here' value={input}></input>
            </form>
            <button onClick={(event) => addPost(event, input)}>Add post</button>
    <p>{addPost}</p>
        </div>
    )
}

export default Blog

