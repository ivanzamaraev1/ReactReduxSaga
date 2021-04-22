import React from 'react'
import Post from './Post'
export default ({posts}) => {
    if (!posts.length) {
        return <p className="text-center">Have no Post</p>
    }
    return posts.map(post => <Post post={post} key={post}/>)  
}
