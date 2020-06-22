import * as ACTIONS from './actionTypes'
import {searchLocation, RootState , Weather} from '../models/types'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios'
import { openWeatherAPIKey } from '../config/apiKeys'


export const setLocation = (cityName:searchLocation) => {
    console.log("actions file")
    return {
        type: ACTIONS.ADD_CITY,
        cityName
    }
}

export const fetchingData = () => {
    return {
      type: ACTIONS.FETCHING_DATA,
    };
  };

  const setCurrentWeather = (currentWeather: Weather) => {
    return {
      type: ACTIONS.SET_CURRENT_WEATHER,
      currentWeather,
    };
  };

  const fetchingDataSuccess = () => {
    return {
      type: ACTIONS.FETCHING_DATA_SUCCESS,
    };
  };

  export const fetchingDataFailure = (error: string) => {
    return {
      type: ACTIONS.FETCHING_DATA_FAILURE,
      error,
    };
  };

  export const getWeatherData = (city:string) => {
      
      return async(dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState:any) => {
        dispatch(fetchingData());
          try{
            const result:any = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherAPIKey}`)
            
            if(result.status === 200 ){
                
                dispatch(setCurrentWeather(result.data))
                dispatch(fetchingDataSuccess())
            }else{
                dispatch(fetchingDataFailure("Error = "+result.data));
            }
          }catch(error){
            console.log("Catch sessions error =" + error)
            dispatch(fetchingDataFailure(error.message));
          }
          
      }
  }