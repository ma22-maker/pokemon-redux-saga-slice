import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../components/saga";

const sagaMiddleware = createSagaMiddleware();

export const listingData = createAction("FETCH_ANIME_DATA");
export const detailsPage = createAction("DETAILS_FETCH_DATA");
export const detailsPage_SUCCESS = createAction(
    "DETAILS_FETCH_DATA_SUCCESS",
    function prepare(detailsData) {
      //console.log(detailsData);
      return {
        payload: {
          two: detailsData,
        },
      };
    }
  );

export const listingData_SUCCESS = createAction(
  "FETCH_ANIME_DATA_SUCCESS",
  function prepare(animeData) {
   // console.log(animeData);
    return {
      payload: {
        one: animeData,
      },
    };
  }
);
export const Data_FAILURE = createAction(
  "FETCH_ANIME_DATA_FAILURE",
  function prepare(error) {
    return {
      payload: {
        error,
      },
    };
  }
);
const initialState = {
  loading: false,
  data: [],
  details :{},
  error: null,

};
const readucerdata = createReducer(initialState, (builder) => {
  builder
    .addCase(listingData, (state) => {
        console.log("reducer")
      state.loading = true;
      state.error = null;
    })
    .addCase(listingData_SUCCESS, (state, action) => {
      state.loading = false;
      state.error = null;
    const matter=[]
    action.payload.one.animeData.map((item)=>{
        const types =[]
        item.types.map((type) => (
            types.push(type.type.name)
          ))
          //console.log(types,"types")
     const anime ={
        id:item.id,
        name:item.name,
        image : item.sprites.other.dream_world.front_default,
        types
     }
     matter.push(anime)
    })
    //console.log(matter)
     state.data.push(...matter)
    })
    .addCase(detailsPage, (state,action) => {
        state.loading = true;
        state.error = null;
        //console.log(action.payload)
        
      })
      .addCase(detailsPage_SUCCESS,(state,action)=>{
        state.loading = false;
        state.error = null;
        //console.log(action.payload.two)
        state.details= {...action.payload.two}
      })
  .addCase(Data_FAILURE,(state,action)=>{
      state.loading =false;
      state.error = action.payload.error;
      state.data =[];
  })
});

const store = configureStore({
  reducer: readucerdata,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
