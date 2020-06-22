//import { ForecastState } from '../models/types'
import { openWeatherAPIKey } from './apiKeys'
import axios from 'axios'

export const getWeatherByCity = (city: string) => {
    //let response = {"data":{"coord":{"lon":77.22,"lat":28.67},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":303.42,"feels_like":301.57,"temp_min":303.15,"temp_max":303.71,"pressure":1010,"humidity":28},"visibility":4200,"wind":{"speed":2.6,"deg":290},"clouds":{"all":40},"dt":1586441300,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1586392303,"sunset":1586437990},"timezone":19800,"id":1273294,"name":"Delhi","cod":200},"status":200,"statusText":"OK","headers":{"content-type":"application/json; charset=utf-8"},"config":{"url":"https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=62e6bcddad6a81e6aa0acba389bbdc69","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1},"request":{}}
    //return response.data
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherAPIKey}`)
    .then((res)=>{
        console.log(JSON.stringify(res))
        return res
    })
    .catch(err => {
        return err
    })
}