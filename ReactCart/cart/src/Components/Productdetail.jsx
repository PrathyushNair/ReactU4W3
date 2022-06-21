import React from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'
import styles from "./proddetail.module.css"
export const Productdetail = () => {
  let [indi,setIndi]=React.useState([])
  const {a,desc}=useParams()
  const {cart,handlecartadd}=React.useContext(CartContext)
  console.log(cart)
  React.useEffect(()=>{
    fetch(`http://localhost:8000/${a}?productratingsContainer=${desc}`)
    .then((resp)=>(resp.json()))
    .then((resp)=>{
      setIndi(resp)
    })
  },[a,desc])
  return (
    <>
          {
            indi.map((el)=>(
              <div className={styles.maincontainer}>
                <div className={styles.imgcontainer}><img style={{width:"100%"}}alt="indiprod" src={el.imgresponsivesrc}/></div>
                <div  className={styles.desccontainer}>
                  <div><h2>{el.productbrand}</h2></div>
                  <div><h4>{el.productproduct}</h4></div>
                  <div><p>{el.productdiscountedPrice}</p></div>
                  <div style={{display:"flex",justifyContent:"space-around",width:"80%",margin:"auto"}}>Available Sizes:<span>{el.productsizeButton}</span><span>{el.productsizeButton2}</span><span>{el.productsizeButton3}</span></div>
                  <button onClick={()=>handlecartadd(el)} className={styles.btn} >Add to cart</button>
                </div>
              
              </div>
            ))
          }
    </>
   
  )
}
