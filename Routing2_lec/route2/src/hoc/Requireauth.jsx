import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'
export const RequiredAuth = ({children}) => {
    const {isauth}=useContext(AuthContext)
    //const navigate=useNavigate()
    const location=useLocation()
     console.log(location)
    const{pathname}=location
   if(isauth)
   {
    return (children)
   }
   else
   {
    return <Navigate to="/login" state={{from:pathname}} replace/>
   }
  }
