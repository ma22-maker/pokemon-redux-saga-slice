import { all, takeLatest } from 'redux-saga/effects';
import { listingData,listingData_SUCCESS,detailsPage,detailsPage_SUCCESS,Data_FAILURE } from '../GlobalStore/reduxStore';
import { getData,Getallpokemon } from './exportData';
import {  call, put } from 'redux-saga/effects';

function* fetchData() {
    console.log("inside saga function")
  try {
   // console.log("inside saga try")
    const response = yield call(getData);
    // console.log(response)
    const animeData = yield all(
        response.map(async (anime) => {
          const res = await Getallpokemon(anime.name);
        //   console.log(res)
          return res;      
        }))
    //console.log(animeData);
    yield put(listingData_SUCCESS({animeData}));
  } catch (error) {
    console.log(error)
    yield put(Data_FAILURE(error));
  }
}

function* getAnimedetails(action)
{ try{
  console.log(action.payload.animeName);
  const animeName = action.payload.animeName;
  // console.log("inside 2nds aga")
  const detailsData = yield call(Getallpokemon,animeName)
  // console.log(detailsData);
yield put(detailsPage_SUCCESS({detailsData}));

}catch(error)
{
  console.log(error)
  yield put(Data_FAILURE(error));

}

}

function* watchFetchData() {
  yield takeLatest(listingData.type, fetchData);
  yield takeLatest(detailsPage.type,getAnimedetails)
}

export default function* rootSaga() {
  yield all([
    watchFetchData(),
  ]);
}
