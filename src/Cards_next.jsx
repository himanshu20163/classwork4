import React from 'react'
import image from './image.png';
import './cards.css';

const Cards_next = () => {

  const ans = {
    left:"34rem",
    height:"30px",
    width:"30px",
    background:"hsl(341.93deg 74.11% 56.08%)",
    fontSize:"20px",
    color:"white",
    fontWeight:"bold",
    position:"absolute",
    top:"120px",
    borderRadius:"5px",
    marginLeft:"10px",
  }
  return (
        <div className='cards'>
            <div className='top'>
              <img src='https://thumbs.dreamstime.com/z/web-developer-works-laptop-horizontal-banner-young-programmer-job-colorful-vector-illustration-flat-style-93407178.jpg' style={{height:"350px",width:"450px"}}></img>
              <p style={ans}>+</p>
            </div>
            <div className='bottom'>
               <h3 style={{fontSize:"32px"}}>Himanshu Sahu</h3> 
               <p>UI/UX Designer</p>
            </div>
            <div className="follow_part">
          <div class="posts_part">
            <p>172</p>
            <p>POSTS</p>
          </div>
          <div class="posts_part">
            <p>47</p>
            <p>FOLLWERS</p>
          </div>
          <div class="posts_part">
            <p>20</p>
            <p>FOLLOWINGS</p>
          </div>
        </div>
    </div>
  )
}

export default Cards_next