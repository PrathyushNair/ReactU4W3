import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'

export const Login = () => {
   
    const {login}=useContext(AuthContext)
    const [logincred,setLogincred]=React.useState({})
    const handlechange=(e)=>{
        setLogincred({...logincred,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(logincred)
        login()
        

    }
  return (
    <form onSubmit={handleSubmit}style={{display:"flex",
    flexDirection:"column",
    margin:"auto",
    maxWidth:"200px",
    gap:"10px"}}>
        <input onChange={handlechange} name='email' type="text" placeholder="email"></input>
        <input onChange={handlechange} name="password" type="password" placeholder="enter password"></input>
        <button type="submit">Log in</button>
    </form>
  )
}
