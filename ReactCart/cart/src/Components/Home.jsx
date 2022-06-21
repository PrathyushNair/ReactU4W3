import React from 'react'
import styles from "./home.module.css"

export const Home = () => {
  return (
    <div>
        <div className={styles.adddiv} >
            <img style={{width:"100%"}} alt="deal" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"/>
        </div>
        <div><h1>DEALS OF THE DAY</h1></div>
        <div className={styles.imgdivs}>
            <div><img alt="deal2" src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/5250f1a1-4988-4db7-b892-199f38316f961654098449744-Shirts--1-.jpg"/></div>
            <div><img alt="deal3" src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/b0b80df7-c70a-4819-8ac6-2c6815cd63c81654098506300-Best-Of-Sarees--1-.jpg"  /></div>
            <div><img alt="deal4" src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/5d972cf2-a6f8-4dec-9df8-0c1e841ad2501654098580425-Best-Of-Kurta-Sets.jpg" /></div>
            <div><img alt="deal5" src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/3f8486f9-fe00-40c2-903c-51151ce1c1261654098635872-Flats---Heels.jpg" /></div>
            <div><img alt="deal6" src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/04d8e4e6-ae47-46bc-8a3c-4ddb919854dd1654098661836-Cotton-Bedsheets--1-.jpg"  /></div>
        </div>
        
    </div>
  )
}
