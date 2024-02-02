import React from 'react'
import './addPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function addPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
            <img src="/image/2.jpg" alt="" className='addPostPic'/> 
                <input placeholder='whats in your mind..?' type="text" className="addPostInput" />
            </div>
            <hr />
            <div className="addPostBottom">
                <div className="addPostOption">
                <InsertPhotoIcon htmlColor='orange' className='addPhoto'/>
                <span className="addPhotoVideo">Add Photo/Video</span>

                </div>
                <div className="addPostOption">
                <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                <span className="addPhotoVideo">Add Location</span>

                </div>
                <div className="addPostOption">
                <LocalOfferIcon htmlColor='blue'  className='addPhoto'/>
                <span className="addPhotoVideo">Tag a friend</span>

                </div>
                <div className="addPostOption">
                <LiveTvIcon htmlColor='tomato' className='addPhoto'/>
                <span className="addPhotoVideo">Go Live</span>

                </div>
                

            </div>
            <button className="postButton">Post</button>
        </div>
      
    </div>
  )
}
