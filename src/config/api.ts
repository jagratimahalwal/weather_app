//import { ForecastState } from '../models/types'
import { openWeatherAPIKey } from "./apiKeys";

export const getWeatherByCity = (city: string) => {
  let response = {
    data: {
      coord: { lon: 5.9694, lat: 52.21 },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 299.01,
        feels_like: 299.22,
        temp_min: 298.05,
        temp_max: 300.51,
        pressure: 1014,
        humidity: 60,
        sea_level: 1014,
        grnd_level: 1011,
      },
      visibility: 10000,
      wind: { speed: 3.09, deg: 120 },
      clouds: { all: 100 },
      dt: 1720522428,
      sys: {
        type: 2,
        id: 2091796,
        country: "NL",
        sunrise: 1720495586,
        sunset: 1720554956,
      },
      timezone: 7200,
      id: 2759706,
      name: "Apeldoorn",
      cod: 200,
    },
    status: 200,
    statusText: "OK",
    headers: { "content-type": "application/json; charset=utf-8" },
    config: {
      url: "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=62e6bcddad6a81e6aa0acba389bbdc69",
      method: "get",
      headers: { Accept: "application/json, text/plain, */*" },
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
    },
    request: {},
  };
  return response.data;
  /* fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherAPIKey}`
  )
    .then((res) => {
      console.log(JSON.stringify(res));
      return res;
    })
    .catch((err) => {
      return err;
    }); */
};
