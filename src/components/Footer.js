import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeModeContext } from '../contexts/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirecting } from '../toastify';

const Footer = () => {
  const {themeMode}= useContext(ThemeModeContext);

  const mode = themeMode?"light_mode_footer":"dark_mode_footer";
  const toastifyMode = themeMode ? "dark":"light";

  const UIText = useSelector((store)=> store.languageReducer);

  return (
    <div className={`${mode} footer_main`}>
      <h1 id='footerMainHeader'>{UIText.footerComment}</h1>
      <div id='footerSecondRow'>
         <span>👉 <a id="e-mail" href="mailto:ogzhanncolak@icloud.com">ogzhanncolak@icloud.com</a></span> 
          <div id="footerLinks">
            <button id="personalBlog" onClick={()=>toast.warn(UIText.pageUnderConstruction,{ position: toast.POSITION.TOP_LEFT})}> {UIText.personelBlog}</button>
            <button id="gitHub" onClick={()=>{redirecting("https://github.com/ogzhancolak",UIText.redirectingGithub)}}> Github</button>
            <button id="linkedin" onClick={()=>{redirecting("https://www.linkedin.com/in/ogzhancolak9/",UIText.redirectingLinkedin)}}>Linkedin</button>
            <ToastContainer
              // position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              // closeOnClick
              theme={toastifyMode}
            />
          </div>
      </div>
     
      
     



    </div>
  )
}

export default Footer