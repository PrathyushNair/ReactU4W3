import { createContext } from "react";
import React from "react";
export const DropdownContext=createContext()
export const DropdownProvider=({children})=>{

    let [mendrop,setMendrop]=React.useState(false)
    let [womendrop,setWomendrop]=React.useState(false)
    let [kiddrop,setKiddrop]=React.useState(false)
    let handlemendrop=()=>{
        console.log(mendrop)
        setMendrop(!mendrop)
    }
    let handlewomendrop=()=>{
        setWomendrop(!womendrop)
    }
    let handlekidsdrop=()=>{
        setKiddrop(!kiddrop)
    }
    return <DropdownContext.Provider value={{mendrop,womendrop,kiddrop,
        handlekidsdrop,handlemendrop,handlewomendrop}}>{children}</DropdownContext.Provider>
}