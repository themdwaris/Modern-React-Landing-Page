import React ,{ createContext, useContext, useState } from "react";

const ContextApp = createContext()

const ContextProvider = ({children})=>{
    const [user,setUser]=useState(null)
    
    return(
        <ContextApp.Provider value={{user,setUser}}>
            {children}
        </ContextApp.Provider>
    )
}

const useUserContext=()=>useContext(ContextApp)

export {ContextApp,ContextProvider,useUserContext}