import React from 'react'
import styles from "./dropdown.module.css"
import { Link } from 'react-router-dom'
import { DropdownContext } from '../Contexts/Dropdown'
export const Womensdrop = () => {
    const {handlewomendrop}=React.useContext(DropdownContext)
  return (
    <div>
        <div onClick={handlewomendrop} className={styles.dropdown}>
           <Link style={{color:'white',textDecoration:"none"}} to="/womens-kurtis"> Womens Kurtis</Link>
        </div>
    </div>
  )
}
