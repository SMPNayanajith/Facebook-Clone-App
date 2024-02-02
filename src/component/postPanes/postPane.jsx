import React from 'react'
import "./postPane.css"
import AddPost from '../addPost/addPost'
import Post from '../Post/post'

export default function postPane() {
  return (
    <div className='postPaneBox'>
      <AddPost/>
      <Post/>
    </div>
  )
}
