import React from 'react'
import Navbar from '../../component/Navigation/Navbar'
import LeftPane from '../../component/leftPanes/leftPane'
import PostPane from '../../component/postPanes/postPane'
import RightPane from '../../component/rightPanes/rightPane'
import './home.css'

export default function Home() {
  return (
    
   
    <div>
      <Navbar/>
    
    
    <div className='call'>
    <LeftPane/>
    <PostPane/>
    <RightPane/>
    </div>
    </div>
  )
}
