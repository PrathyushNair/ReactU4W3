import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'
import { useContext } from 'react'
export const Navbar = () => {
  const {isauth,logout}=useContext(AuthContext)
  const navigate=useNavigate()
  let handlelogin=()=>{

 if(isauth)
 {
  logout()
  
 }
 else{
  navigate("/login")
 }
  }
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>Navbar
      <Link to ="">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/posts">Posts</Link>
      <button onClick={handlelogin}>{isauth ?"Logout":"Login"}</button>
    </div>
  )
}
