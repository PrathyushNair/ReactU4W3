import React from 'react'
import {Link} from "react-router-dom"
import styles from "./home.module.css"
export const Footer = () => {
  return (
    
         <div className={styles.footer}>
          <div>
            <h4>Useful Links</h4>
            <p><Link style={{color:'white',textDecoration:"none"}} to="/about-us">About Us</Link></p>
            <p><Link style={{color:'white',textDecoration:"none"}} to="/FAQ">FAQ</Link></p>
            <p>Terms of use </p>
            <p>Terms of use</p>
            <p>Job Opportunities</p>
          </div>
          <div className={styles.logos}>
            <div><i class="fa-brands fa-facebook"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-instagram"></i></div>
            <div><i class="fa-brands fa-youtube"></i></div>
          </div>
            <div  className={styles.fakepr}><p>100% gaurentee of original products</p></div>
            <div  className={styles.fakepr}><p>30 days return policy</p></div>
        </div>
    
  )
}
