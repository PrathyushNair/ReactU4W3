import React from 'react'
import {Link,Outlet} from "react-router-dom"
export const Products = () => {
    let [data,setData]=React.useState([])
    React.useEffect(()=>{
        fetch("http://localhost:8080/products")
        .then((resp)=>(resp.json()))
        .then((resp)=>{
            setData (resp)
        })
    },[])
  return (
    <div>Products
        <div style={{display:"grid",border:"1px solid red",gridTemplateColumns:"repeat (2,1fr"}}>
        {data.map((el)=>(
           <Link to={`/products/${el.id}`}><div>{el.name}</div></Link> 
        ))}
        <Outlet/>
        </div>
        
    </div>
  )
}
