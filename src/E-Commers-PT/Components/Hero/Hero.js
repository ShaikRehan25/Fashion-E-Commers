
import React from 'react'
import './Hero.css';
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <>
     <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src="https://i.pinimg.com/originals/21/f2/07/21f2078d23f9195570a3711c018328b2.png" alt="handimage" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>
                    Latest collection
                </div>
                <FaArrowRightLong />
            </div>
        </div>
        <div className="hero-right">
            <img src="https://pngimg.com/d/businessman_PNG6566.png" alt="" />
        </div>
     </div>
   </>
  )
}

export default Hero