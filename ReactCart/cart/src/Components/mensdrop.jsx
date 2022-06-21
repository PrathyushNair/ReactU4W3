import React from 'react'
import styles from "./dropdown.module.css"
import { Link } from 'react-router-dom'
import { DropdownContext } from '../Contexts/Dropdown'
export const Mensdrop = () => {
  const {handlemendrop}=React.useContext(DropdownContext)
  return (
    <div>
        <div onClick={handlemendrop}className={styles.dropdown}>
           <Link style={{color:'white',textDecoration:"none"}} to="/mens-tshirts">Mens T-Shirts</Link> 
        </div>
    </div>
  )
}
