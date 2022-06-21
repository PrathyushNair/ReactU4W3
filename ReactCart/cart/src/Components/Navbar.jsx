import React from 'react'
import styles from "./navbar.module.css"
import { Mensdrop } from './mensdrop'
import { Womensdrop } from './womensdrop'
import { Kidsdrop } from './kidsdrop'
import { DropdownContext } from '../Contexts/Dropdown'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'
export const Navbar = () => {
    const {cart}=React.useContext(CartContext)
    const {mendrop,womendrop,kiddrop,handlekidsdrop,handlemendrop,handlewomendrop}=React.useContext(DropdownContext)
    const navigate=useNavigate()
    let gotohome=()=>{
        navigate("")
    }
  
  return (
      <div className={styles.maincontainer}>
            <div className={styles.catcontainer}>
                <div style={{cursor:"pointer"}}>Clothing For Men <span onClick={handlemendrop}>{mendrop ? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}</span>
                {mendrop && <Mensdrop/>}</div>
                <div style={{cursor:"pointer"}}>Clothing For Women<span onClick={handlewomendrop}>{womendrop ? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}</span>
                {womendrop && <Womensdrop/>}</div>
                <div style={{cursor:"pointer"}}>Clothing For Kids<span onClick={handlekidsdrop}>{kiddrop ? <i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}</span>
                {kiddrop && <Kidsdrop/>}</div>
            </div>
            <div className={styles.lscontainer}>
                <button className={styles.btn} onClick={gotohome}>Home</button>
                <button className={styles.btn} style={{cursor:"pointer"}}>Signup</button>
                <button className={styles.btn} style={{cursor:"pointer"}}>Login</button>
                <div  style={{color:"white"}}><i  style={{marginTop:"10px"}}class="fa-solid fa-cart-shopping"></i><span>{cart.length}</span></div>
            </div>
      </div>
    
  )
}
