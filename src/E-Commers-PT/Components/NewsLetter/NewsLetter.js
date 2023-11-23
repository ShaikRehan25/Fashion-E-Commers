
import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <>
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Send to Our newsletter and stay update</p>
            <div>
                <input type="email" placeholder='Enter Ypur Email Id'/>
                <button>Connect us</button>
            </div>
        </div>
    </>
  )
}

export default NewsLetter