import React, { createContext } from 'react'
import useLocalStorage from '../localHook/UseLocalStorage';


export const ThemeModeContext = createContext();

const ThemeModeProvider = ({ children }) => {


  //const [modeBoolean,setModeBoolean] = useLocalStorage("mode","light_Mode")
  const[themeMode,SetThemeMode]= useLocalStorage("light_mode",true)
  
  

  // useEffect(()=>{
  //   themeMode=== true ? setModeBoolean("light_Mode") : setModeBoolean("dark_Mode")
  //   },[themeMode])

 

  return (
    <ThemeModeContext.Provider value={{themeMode,SetThemeMode}}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeProvider