import { createContext } from "react"
import React from "react"
export const CartContext =createContext()
export const CartProvider=({children})=>{
    let [cart,setCart]=React.useState([])

   const handlecartadd=(el)=>{
        setCart([...cart,{el}])
      
    }
    return <CartContext.Provider value={{cart,handlecartadd}}>{children}</CartContext.Provider>
}