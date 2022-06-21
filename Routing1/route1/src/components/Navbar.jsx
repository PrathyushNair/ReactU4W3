import React from 'react'
import {Link,useNavigate} from "react-router-dom"
export const Navbar = () => {
    const navigate=useNavigate()
    const handleclick=(id)=>{
        if(id===1){
                navigate("/products/1")
        }
    }
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/products">Products</Link>
         <button onClick={()=>handleclick(1)}>Go To product1</button>
    </div>
  )
}
