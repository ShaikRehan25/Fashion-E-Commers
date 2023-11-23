
import React from 'react'
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";


function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footer-logo">
                <img src="https://www.freepnglogos.com/uploads/shopping-bag-png/shopping-bag-plaseto-bag-plaseto-bags-manufacturer-west-bengal-17.png" alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <FaInstagram className='footer-icons instagarm'/>
                </div>
                <div className="footer-icon-container">
                    <FaFacebookSquare className='footer-icons'/>
                </div>
                <div className="footer-icon-container">
                    <IoLogoWhatsapp className='footer-icons'/>
                </div>
                <div className="footer-icon-container">
                    <FaYoutube className='footer-icons'/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    </>
  )
}

export default Footer