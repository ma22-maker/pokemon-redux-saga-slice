import { legacy_createStore as createStore} from 'redux'
// import { createStore } from 'redux'

const initialState ={}

export function actioname (animeData)
{
  return{
    type:"Anime_List_ACTION",
    payload:animeData
  }
}

const reducer = (state = initialState,action)=>
{ 
     switch (action.type) {
    case "Anime_List_ACTION":
      return action.payload;

    default:
      return state;
  }

}
 export const store = createStore(reducer) 