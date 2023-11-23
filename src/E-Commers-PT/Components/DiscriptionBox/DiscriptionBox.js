

import React from 'react'
import './Discription.css';

function DiscriptionBox() {
  return (
    <>
        <div className='descriptionbox'>
            <div className="discriptionbox-navigator">
                <div className="discriptionbox-nav-box">Description</div>
                <div className="discriptionbox-nav-box fade">Reviews(145)</div>
            </div>
            <div className="discriptionbox-discription">
                <p>Crafted from cotton blend fabric, the shirt brings the benefit of cotton blended with other fibres. The premium material ensures comfort and breathability to make you feel breezy and relaxed throughout the day. Additionally, the premium cotton blend fabric makes sure that the shirt retains its feel and look for a long time.</p>
                <p>Caring for the shirt will be a cakewalk as you will not need to spend a lot of time and effort in cleaning the shirt. With just a regular machine wash, your shirt will be clean and ready to be worn again for the next adventure. This ease of care adds to the convenience.</p>
            </div>
        </div>
    </>
  )
}

export default DiscriptionBox