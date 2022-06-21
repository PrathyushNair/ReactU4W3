import React from 'react'
import styles from "./dropdown.module.css"
import { DropdownContext } from '../Contexts/Dropdown'
export const Kidsdrop = () => {
  const {handlekidsdrop}=React.useContext(DropdownContext)
  return (
    <div>
        <div onClick={handlekidsdrop}className={styles.dropdown}>
            Kids
        </div>
    </div>
  )
}
