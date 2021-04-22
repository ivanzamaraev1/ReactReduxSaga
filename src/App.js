import React from 'react'
import PostForms from './components/PostForms'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'

export default function App() {
  return (
    <div class="container pt-3">
      <div class="row">
      <div class="col">
        <PostForms/>
    </div>
    </div>
    <div class="row">
    <div class="col">
      <Posts posts={[1, 2, 3]}/>
    </div>
    <FetchedPosts posts/>
    </div>
    </div>
  )
}
