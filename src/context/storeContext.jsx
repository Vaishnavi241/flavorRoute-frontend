import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const storeContext=createContext(null);
const StoreContextProvider=(props)=>{
    const [token,setToken]=useState("")
    const [cartItems,setCartItems]=useState({});
    const [food_list,setFoodList]=useState([])
    const url='http://localhost:4000'
    const addToCart=async (itemId)=>{
        setCartItems((prev)=>{
        const updated={...(prev||{})}
        if(!updated[itemId]){
            updated[itemId]=1;
    }else{
        updated[itemId]+=1
    }
return updated
})
    if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
}
const removeFromCart=async (itemId)=>{
    setCartItems((prev)=>{
        const updated={...(prev||{})}
        if(updated[itemId]>0){
            updated[itemId]-=1
        }
        return updated
    })
    if(token){
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
}
const getTotalCartAmount=()=>{
    let totalAmount=0;
    for (const item in cartItems) {
        if(cartItems[item]>0){
        let itemInfo=food_list.find((product)=>product._id===item);
        totalAmount+=itemInfo.price*cartItems[item];
        }
    }
    return totalAmount; 
}
const fetchFoodList =async ()=>{
    const response=await axios.get(url+'/api/food/list')
    setFoodList(response.data.data)
}
const loadCartData =async(token)=>{
    const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems((response.data.cartData))
}//makes sure data is not lost on refresh
useEffect(()=>{
    async function loadData(){
        await fetchFoodList()
        if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
    }
    }
    loadData()
},[])//it keeps you logged in in case the page refreshes
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <storeContext.Provider value={contextValue}> 
        {props.children}
        </storeContext.Provider>
    )
}
export default StoreContextProvider;