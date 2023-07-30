import React, { useContext } from 'react'
import { ThemeModeContext } from '../contexts/ThemeContext'

//Components
import Personalntroduction from './Personalntroduction';
import Profile from './Profile';
import Projects from './Projects';
import Skills from './Skills';

const Body = () => {
  const{themeMode}=useContext(ThemeModeContext);
  const mode = themeMode?"light_mode":"dark_mode";

  return (
    <div className={`${mode} body_main`}> 
      <Personalntroduction themeMode={themeMode}/>
      <Skills/>
      <hr id='border'/>
      <Profile/>
      <hr id='border'/>
      <Projects/>
  </div>
  )
}

export default Body