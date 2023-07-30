import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
  const UIText = useSelector((store)=> store.languageReducer);
  return (
    <section id="profile">
        <h1 id='profileMainHeaders'>{UIText.profileHeader}</h1>
        <div id="profileSet" >
            <div id='profileBoxSet'>
              <h2 id='profileSubHeader'>{UIText.profileHeader}</h2>
              <div id='profileBox'>
                <ul id="key">{UIText.DOBQuestion}</ul>
                <ul id="value">{UIText.DOBAnswern}</ul>
                <ul id="key">{UIText.cityQuestion}</ul>
                <ul id="value">{UIText.cityAnswer}</ul>
                <ul id="key">{UIText.educationQuestion}</ul>
                <ul id="value">{UIText.educationAnswer}</ul>
                <ul id="key">{UIText.roleQuestion}</ul>
                <ul id="value">{UIText.roleAnswer}</ul>
              </div>
            </div>
            <div id='aboutMeSet'>
              <h2 id="aboutMeSubHeader">{UIText.aboutme}</h2>
              <p id="aboutMeDefinition"> {UIText.aboutMeDescription}</p>
            </div>
        </div>  
    </section> 
  )
}

export default Profile