import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <a href=''><img src={assets.logo} alt='logo'/></a>
                <p>Welcome to FlavorRoute! We invite you to explore our culinary world where passion meets plate. Browse our menu of delicious, handcrafted dishes and prepare for a memorable dining experience.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='Facebook'/>
                    <img src={assets.twitter_icon} alt="X"/>
                    <img src={assets.linkedin_icon} alt="LinkedIn"/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>LET'S CONNECT</h2>
                <ul>
                    <li>+91-1234-567890</li>
                    <li>flavor@route.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright-text'>
            &copy; Copyright 2025| FlavorRoute | flavor@route.com| All rights reserved</p>  
    </div>
  )
}

export default Footer