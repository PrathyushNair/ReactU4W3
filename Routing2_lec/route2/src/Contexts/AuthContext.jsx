import React ,{ createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    let [isauth,setIsauth]=React.useState(false)
    let navigate=useNavigate()
    const {state}=useLocation()
    console.log(state)
    const login=()=>{
        setIsauth(true)
        if(state.from)
        {
            navigate(state.from,{replace:true})
        }
        else{
            navigate("/")
        }
        
    }
    const logout=()=>{
        setIsauth(false)
    }
 return <AuthContext.Provider value={{isauth,login,logout}}>{children}</AuthContext.Provider>
}