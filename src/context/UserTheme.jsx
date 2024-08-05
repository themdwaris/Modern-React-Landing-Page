import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()


const ThemeContextProvider = ({children})=>{
    const [themeMode,setThemeMode]=useState("light")
    const [themeToggle,setThemeToggle]=useState(false)
    const darkTheme=()=>{}
    const lightTheme=()=>{}
    return(
        <ThemeContext.Provider value={{themeMode,setThemeMode,darkTheme,lightTheme,themeToggle,setThemeToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}


const useTheme = ()=>useContext(ThemeContext)

export {ThemeContext,ThemeContextProvider,useTheme}