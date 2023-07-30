// In order to avoid high code count in Project js this custom hook created, the data comes from reducer and then is sent to Project js
import pizzaOrder from "../img/pizzaordercode.vercel.app.png"
import nasaApod from "../img/nasapod.vercel.app.png"
import taskManagement from "../img/taskyonetimi.vercel.app.png"
import { useSelector } from "react-redux";

export const ProjectUIText = () => {

  const UITextProject = useSelector((store)=> store.languageReducer)

  const projectsData = [{
    img :pizzaOrder,
    alt:"pizzaOrder",
    name:UITextProject.projectName1,
    definition:UITextProject.projectDescription1,
    skill1:"ReactJS",
    skill2:"Yup",
    skill3:"Axios",
    githubLink:"https://github.com/ogzhancolak/fsweb-s7-challenge-pizza",
    websitelink:"https://pizzaordercode.vercel.app/",
    website:UITextProject.viewSite
  },
  {
    img :nasaApod,
    alt:"nasaApod",
    name:UITextProject.projectName2,
    definition:UITextProject.projectDescription2,
    skill1:"Bootstrap",
    skill2:"ReactJS",
    skill3:"Axios",
    githubLink:"https://github.com/ogzhancolak/FSWeb-S6G3-Nasa",
    websitelink:"https://nasapod.vercel.app/",
    website:UITextProject.viewSite
  },
  {
    img:taskManagement,
    alt:"taskManagement",
    name:UITextProject.projectName3,
    definition:UITextProject.projectDescription3,
    skill1:"ReactJS",
    skill2:"React-Hook",
    skill3:"Toastify",
    githubLink:"https://github.com/ogzhancolak/fsweb-s9g1-task-yonetimi",
    websitelink:"https://taskyonetimi.vercel.app/",
    website:UITextProject.viewSite
  }]
  return projectsData;
}


