import React, { useContext } from 'react'
import './FoodDisplay.css'
import { storeContext } from '../../context/storeContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
  const {food_list}=useContext(storeContext)
  return (
    <div className='food-display' id="food-display">
      <h2>Top Dishes for you</h2>
      <div className="food-display-list">
        {food_list.filter(item=>category==="All" || item.category===category)
        .map(item=>(
          <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>
          ))}
      </div>
    </div>
  )
}

export default FoodDisplay