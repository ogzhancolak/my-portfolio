import { LANGUAGE_SELECTION } from "../actions/languageAction";
import { enText } from "../../languages/en";
import { trText } from "../../languages/tr";


// In order to remember language selection after closing the page  the local sotarage is checked
const localStorageLangValue = JSON.parse(localStorage.getItem("English"));
// according to local storage value the initialState is uploaded
const initialState = localStorageLangValue=== true ? {...enText}:{...trText}


export const languageReducer = (state = initialState, action ) =>{
  switch (action.type) {
    case LANGUAGE_SELECTION :
      let languageSelection = action.payload ? enText : trText;
      return{
        ...state,
       ...languageSelection
      }
    default:
      return state;
  }
}