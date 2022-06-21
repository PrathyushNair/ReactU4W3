import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Product = ({name}) => {
    let [proddata,setProddata]=React.useState({})
    const{id}=useParams()
    console.log(id)

    useEffect(()=>{
        fetch(`http://localhost:8080/products/${id}`)
        .then((resp)=>(resp.json()))
        .then((resp)=>{
            setProddata(resp)
        })
    },[id])
  return (
    <div>Product id:{id}
    <div>
        {proddata.name}
    </div>
    <div>{name}</div>
        </div>
  )
}
