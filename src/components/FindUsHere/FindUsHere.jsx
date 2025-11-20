import React from 'react'
import './FindUsHere.css'
const FindUsHere = () => {
  return (
    <div className='find-us-here' id='find-us-here'>
        <h2>Find Us Here</h2>
        <iframe
        title='restaurant-map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5762271376275!2d77.35669397533486!3d28.61248727567571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5992452d761%3A0xaaa44725147c1507!2sJSS%20Academy%20of%20Technical%20Education!5e0!3m2!1sen!2sin!4v1758279063673!5m2!1sen!2sin"
         width="600" 
         height="450" 
         style={{border:0}}
          allowFullScreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        
    </div>
  )
}

export default FindUsHere