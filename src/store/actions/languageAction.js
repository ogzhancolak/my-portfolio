import { axiosInstance } from "../../endpoints/api";
export const LANGUAGE_SELECTION = "LANGUAGE_SELECTION";


export const languageSelection = (bool,UIText)=>(dispatch)=>{
  axiosInstance
    .post("/mywebpage",UIText)
    .then((res)=>{
      dispatch({type:LANGUAGE_SELECTION, payload:bool})
    })
}
