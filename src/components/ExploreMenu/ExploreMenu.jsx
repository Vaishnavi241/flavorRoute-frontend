import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore Our Menu</h2>
        <p className='explore-menu-text'>Taste the best at unbeatable prices. From appetizers to desserts, discover fresh flavors made just for you.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>(
                <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category==item.menu_name?"active":""} src={item.menu_image} alt='menu_image'/>
                    <p>{item.menu_name}</p>
                </div>
            ))}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu