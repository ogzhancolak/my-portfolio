import React from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirecting } from '../toastify';

const Personalntroduction = ({themeMode}) => {
  const UIText = useSelector((store)=> store.languageReducer);
  const toastifyMode = themeMode ? "dark":"light";


  return (
    <section id="personalIntroduction">
          <div id="personalIntroductionLeftColoumn">
            <div id="nameAndLine">
              <hr id="lineNextoName"></hr>
              <h2 id='name'>Ali Oğuzhan Çolak</h2>
            </div>
            <h1 id="mainHeader">{UIText.mainHeader1} 
              <br/>
              {UIText.mainHeader2} 
            </h1>
            <p id='shortIntroduction'>{UIText.shortIntroduction}</p>
            <nav>
              <div id='buttonGroup'>
                <button id="introductionButton" onClick={(e)=>{e.preventDefault(); window.open("mailto:ogzhanncolak@icloud.com")}}>&nbsp;{UIText.hireMe}&nbsp;</button>
                <button  id="introductionButton"  onClick={()=>{redirecting("https://github.com/ogzhancolak",UIText.redirectingGithub)}}><i className="fa fa-github fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Github</button>
              </div>
              <div id='buttonGroup'>
                <button id="introductionButton" onClick={()=>{redirecting("https://www.linkedin.com/in/ogzhancolak9/",UIText.redirectingLinkedin)}}><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Linkedin</button>
              </div>
            </nav> 
          </div>
          <div id="personalIntroductionRightColoumn">
            <img src={require("../img/38C873D1-C871-4CF4-8390-8DA83F80F8F4.jpeg")} alt="myPhoto"/>
          </div>
        <ToastContainer
        // position="top-right"
        autoClose={500}
        hideProgressBar={true}
        // closeOnClick
        theme={toastifyMode}
      />
        </section> 
        
  )
}

export default Personalntroduction