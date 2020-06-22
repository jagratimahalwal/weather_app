import * as ACTION from '../actions/actionTypes'
import { ForecastState } from '../models/types'

const initialState: any ={
  status: 'loading',
	searchedLocations:[],
  error:'',
  weatherData:[]
}

export const reducers = (state: ForecastState = initialState, action: any) => {
	
  switch(action.type){
    case ACTION.ADD_CITY:
      return {
        ...state,
        searchedLocations: [...state.searchedLocations, action.cityName.searchedLocations]
      };
      case ACTION.FETCHING_DATA:
        return{
          ...state,
          status: 'loading'
        };
      case ACTION.FETCHING_DATA_SUCCESS:
          return{
            ...state,
            status: 'loaded'
          }
      case ACTION.SET_CURRENT_WEATHER:
        return{
          ...state,
          weatherData: [...state.weatherData, action.currentWeather]
        }
      case ACTION.FETCHING_DATA_FAILURE:
        return{
          ...state,
          error:action.error
        }
			default:
      return state;
    }
}