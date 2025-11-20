import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom'
import { storeContext } from '../../context/storeContext.jsx'
const NavBar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(storeContext);
    const navigate=useNavigate()
    const logout=()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
   }
    return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='logo' className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?'active':''}>Home</Link>
            <a href="#explore-menu" onClick={()=>{setMenu("menu")}} className={menu==="menu"?'active':''}>Menu</a>
            <a href="#find-us-here" onClick={()=>{setMenu("find-us-here")}} className={menu==="menu"?'active':''}>FindUsHere</a>
            <a href='#mobile-app' onClick={()=>{setMenu("mobile-app")}} className={menu==="mobile-app"?'active':''}>Mobile-app</a>
            <a href='#footer' onClick={()=>{setMenu("contact-us")}} className={menu==="contact-us"?'active':''}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon" />
            <div className="navbar-cart">
                <Link to='/cart'> <img src={assets.basket_icon} alt="cart" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token
            ?<button onClick={()=>setShowLogin(true)} className="sign-in">Sign In</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt=""/>
            <ul className='nav-profile-dropdown'>
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt='bag-icon'/><p>Orders</p></li>
            <hr/>
            <li onClick={logout}><img  src={assets.logout_icon} alt='logout'/><p>Logout</p></li>
            </ul>
            </div>
            }
            
        </div>
    </div>
  )
}

export default NavBar