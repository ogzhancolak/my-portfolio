import React, { useContext } from 'react'
import { ThemeModeContext } from '../contexts/ThemeContext'


//Components
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'


const MainPage = () => {

const {themeMode}=useContext(ThemeModeContext)

  return (
    <>
    <div className={themeMode? "light_mode":"dark_mode"}>
      <Header/>
      <Body/>
    </div> 
    <div className={themeMode? "light_mode_footer":"dark_mode_footer"}>
      <Footer/>
    </div>
    </>
    
    
  )
}

export default MainPage