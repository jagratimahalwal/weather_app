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

export const getWeatherByLongLat = (long: number, lat: number) => {
  let response = {
    coord: {
      lon: 6.0193,
      lat: 52.2144,
    },
    weather: [
      {
        id: 701,
        main: "Mist",
        description: "mist",
        icon: "50d",
      },
    ],
    base: "stations",
    main: {
      temp: 278.15,
      feels_like: 274.94,
      temp_min: 277.74,
      temp_max: 278.72,
      pressure: 1026,
      humidity: 89,
      sea_level: 1026,
      grnd_level: 1023,
    },
    visibility: 7000,
    wind: {
      speed: 4.12,
      deg: 100,
    },
    clouds: {
      all: 100,
    },
    dt: 1731076722,
    sys: {
      type: 2,
      id: 2091796,
      country: "NL",
      sunrise: 1731048277,
      sunset: 1731081290,
    },
    timezone: 3600,
    id: 2759706,
    name: "Apeldoorn",
    cod: 200,
  };
  return response;
  /* fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${openWeatherAPIKey}`
  )
    .then((res) => {
      console.log(JSON.stringify(res));
      return res;
    })
    .catch((err) => {
      return err;
    }); */
};

export const getWeatherForecast = (lat: number, long: number) => {
  let response = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1731326400,
        main: {
          temp: 284.66,
          feels_like: 283.75,
          temp_min: 284.66,
          temp_max: 285.04,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1025,
          humidity: 72,
          temp_kf: -0.38,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 42,
        },
        wind: {
          speed: 6.52,
          deg: 321,
          gust: 10.22,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          "3h": 0.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-11 12:00:00",
      },
      {
        dt: 1731337200,
        main: {
          temp: 283.72,
          feels_like: 282.84,
          temp_min: 283.34,
          temp_max: 283.72,
          pressure: 1028,
          sea_level: 1028,
          grnd_level: 1024,
          humidity: 77,
          temp_kf: 0.38,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 60,
        },
        wind: {
          speed: 5.96,
          deg: 317,
          gust: 11.47,
        },
        visibility: 10000,
        pop: 0.22,
        rain: {
          "3h": 0.11,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-11 15:00:00",
      },
      {
        dt: 1731348000,
        main: {
          temp: 282.88,
          feels_like: 279.83,
          temp_min: 282.88,
          temp_max: 282.88,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1024,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 82,
        },
        wind: {
          speed: 6.71,
          deg: 328,
          gust: 13.42,
        },
        visibility: 10000,
        pop: 0.29,
        rain: {
          "3h": 0.17,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-11 18:00:00",
      },
      {
        dt: 1731358800,
        main: {
          temp: 282.74,
          feels_like: 279.41,
          temp_min: 282.74,
          temp_max: 282.74,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1023,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 7.53,
          deg: 341,
          gust: 13.63,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.74,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-11 21:00:00",
      },
      {
        dt: 1731369600,
        main: {
          temp: 282.3,
          feels_like: 278.79,
          temp_min: 282.3,
          temp_max: 282.3,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1024,
          humidity: 90,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 7.74,
          deg: 19,
          gust: 13.73,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.77,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-12 00:00:00",
      },
      {
        dt: 1731380400,
        main: {
          temp: 280.23,
          feels_like: 276.9,
          temp_min: 280.23,
          temp_max: 280.23,
          pressure: 1029,
          sea_level: 1029,
          grnd_level: 1026,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 53,
        },
        wind: {
          speed: 5.44,
          deg: 42,
          gust: 12.18,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-12 03:00:00",
      },
      {
        dt: 1731391200,
        main: {
          temp: 278.95,
          feels_like: 276.53,
          temp_min: 278.95,
          temp_max: 278.95,
          pressure: 1031,
          sea_level: 1031,
          grnd_level: 1027,
          humidity: 97,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 49,
        },
        wind: {
          speed: 3.13,
          deg: 33,
          gust: 8.13,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-12 06:00:00",
      },
      {
        dt: 1731402000,
        main: {
          temp: 281.32,
          feels_like: 279.76,
          temp_min: 281.32,
          temp_max: 281.32,
          pressure: 1032,
          sea_level: 1032,
          grnd_level: 1029,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 91,
        },
        wind: {
          speed: 2.56,
          deg: 24,
          gust: 6.35,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-12 09:00:00",
      },
      {
        dt: 1731412800,
        main: {
          temp: 282.62,
          feels_like: 281.02,
          temp_min: 282.62,
          temp_max: 282.62,
          pressure: 1032,
          sea_level: 1032,
          grnd_level: 1029,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 3.01,
          deg: 63,
          gust: 5.04,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          "3h": 0.12,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-12 12:00:00",
      },
      {
        dt: 1731423600,
        main: {
          temp: 282.33,
          feels_like: 280.54,
          temp_min: 282.33,
          temp_max: 282.33,
          pressure: 1032,
          sea_level: 1032,
          grnd_level: 1028,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.23,
          deg: 42,
          gust: 6.59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-12 15:00:00",
      },
      {
        dt: 1731434400,
        main: {
          temp: 279.76,
          feels_like: 277.64,
          temp_min: 279.76,
          temp_max: 279.76,
          pressure: 1032,
          sea_level: 1032,
          grnd_level: 1029,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 2.92,
          deg: 41,
          gust: 6.38,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-12 18:00:00",
      },
      {
        dt: 1731445200,
        main: {
          temp: 278.97,
          feels_like: 277.18,
          temp_min: 278.97,
          temp_max: 278.97,
          pressure: 1033,
          sea_level: 1033,
          grnd_level: 1029,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.31,
          deg: 44,
          gust: 3.61,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-12 21:00:00",
      },
      {
        dt: 1731456000,
        main: {
          temp: 278.71,
          feels_like: 277.14,
          temp_min: 278.71,
          temp_max: 278.71,
          pressure: 1032,
          sea_level: 1032,
          grnd_level: 1029,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.03,
          deg: 22,
          gust: 2.48,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-13 00:00:00",
      },
      {
        dt: 1731466800,
        main: {
          temp: 278.71,
          feels_like: 277.49,
          temp_min: 278.71,
          temp_max: 278.71,
          pressure: 1032,
          sea_level: 1032,
          grnd_level: 1028,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.7,
          deg: 13,
          gust: 1.65,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-13 03:00:00",
      },
      {
        dt: 1731477600,
        main: {
          temp: 279.13,
          feels_like: 278.38,
          temp_min: 279.13,
          temp_max: 279.13,
          pressure: 1031,
          sea_level: 1031,
          grnd_level: 1027,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.37,
          deg: 313,
          gust: 1.39,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-13 06:00:00",
      },
      {
        dt: 1731488400,
        main: {
          temp: 280.37,
          feels_like: 278.99,
          temp_min: 280.37,
          temp_max: 280.37,
          pressure: 1031,
          sea_level: 1031,
          grnd_level: 1028,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.12,
          deg: 297,
          gust: 4.22,
        },
        visibility: 10000,
        pop: 0.35,
        rain: {
          "3h": 0.19,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-13 09:00:00",
      },
      {
        dt: 1731499200,
        main: {
          temp: 281.55,
          feels_like: 279.53,
          temp_min: 281.55,
          temp_max: 281.55,
          pressure: 1029,
          sea_level: 1029,
          grnd_level: 1026,
          humidity: 97,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.35,
          deg: 284,
          gust: 8.51,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          "3h": 0.18,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-13 12:00:00",
      },
      {
        dt: 1731510000,
        main: {
          temp: 283.19,
          feels_like: 282.63,
          temp_min: 283.19,
          temp_max: 283.19,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1024,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.31,
          deg: 325,
          gust: 9.95,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-13 15:00:00",
      },
      {
        dt: 1731520800,
        main: {
          temp: 282.76,
          feels_like: 280.72,
          temp_min: 282.76,
          temp_max: 282.76,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1023,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.89,
          deg: 326,
          gust: 10.1,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          "3h": 0.34,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-13 18:00:00",
      },
      {
        dt: 1731531600,
        main: {
          temp: 283.04,
          feels_like: 281.7,
          temp_min: 283.04,
          temp_max: 283.04,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1023,
          humidity: 98,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.72,
          deg: 316,
          gust: 8.4,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.93,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-13 21:00:00",
      },
      {
        dt: 1731542400,
        main: {
          temp: 284.2,
          feels_like: 283.79,
          temp_min: 284.2,
          temp_max: 284.2,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1022,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.31,
          deg: 352,
          gust: 10.47,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.85,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-14 00:00:00",
      },
      {
        dt: 1731553200,
        main: {
          temp: 281.78,
          feels_like: 279.54,
          temp_min: 281.78,
          temp_max: 281.78,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1022,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.86,
          deg: 338,
          gust: 9.07,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-14 03:00:00",
      },
      {
        dt: 1731564000,
        main: {
          temp: 279.57,
          feels_like: 277.25,
          temp_min: 279.57,
          temp_max: 279.57,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1022,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 64,
        },
        wind: {
          speed: 3.17,
          deg: 348,
          gust: 9.22,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-14 06:00:00",
      },
      {
        dt: 1731574800,
        main: {
          temp: 281.22,
          feels_like: 279.41,
          temp_min: 281.22,
          temp_max: 281.22,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1023,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.89,
          deg: 341,
          gust: 7.24,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-14 09:00:00",
      },
      {
        dt: 1731585600,
        main: {
          temp: 283.52,
          feels_like: 282.49,
          temp_min: 283.52,
          temp_max: 283.52,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1023,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 27,
        },
        wind: {
          speed: 3.82,
          deg: 342,
          gust: 5.67,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-14 12:00:00",
      },
      {
        dt: 1731596400,
        main: {
          temp: 282.7,
          feels_like: 281.54,
          temp_min: 282.7,
          temp_max: 282.7,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1022,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.36,
          deg: 325,
          gust: 5.49,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-14 15:00:00",
      },
      {
        dt: 1731607200,
        main: {
          temp: 282.21,
          feels_like: 281.03,
          temp_min: 282.21,
          temp_max: 282.21,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1023,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.27,
          deg: 331,
          gust: 5.76,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-14 18:00:00",
      },
      {
        dt: 1731618000,
        main: {
          temp: 282.11,
          feels_like: 281.16,
          temp_min: 282.11,
          temp_max: 282.11,
          pressure: 1027,
          sea_level: 1027,
          grnd_level: 1023,
          humidity: 77,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.97,
          deg: 317,
          gust: 3.15,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-14 21:00:00",
      },
      {
        dt: 1731628800,
        main: {
          temp: 281.09,
          feels_like: 279.61,
          temp_min: 281.09,
          temp_max: 281.09,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1023,
          humidity: 79,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.4,
          deg: 296,
          gust: 2.86,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-15 00:00:00",
      },
      {
        dt: 1731639600,
        main: {
          temp: 280.11,
          feels_like: 279.17,
          temp_min: 280.11,
          temp_max: 280.11,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1022,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.64,
          deg: 281,
          gust: 1.64,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-15 03:00:00",
      },
      {
        dt: 1731650400,
        main: {
          temp: 281.41,
          feels_like: 280.23,
          temp_min: 281.41,
          temp_max: 281.41,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1021,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.1,
          deg: 276,
          gust: 2.84,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-15 06:00:00",
      },
      {
        dt: 1731661200,
        main: {
          temp: 283.19,
          feels_like: 282.05,
          temp_min: 283.19,
          temp_max: 283.19,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1021,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.65,
          deg: 278,
          gust: 3.9,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-15 09:00:00",
      },
      {
        dt: 1731672000,
        main: {
          temp: 283.9,
          feels_like: 282.68,
          temp_min: 283.9,
          temp_max: 283.9,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1020,
          humidity: 63,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 2.73,
          deg: 270,
          gust: 3.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-15 12:00:00",
      },
      {
        dt: 1731682800,
        main: {
          temp: 282.94,
          feels_like: 282.15,
          temp_min: 282.94,
          temp_max: 282.94,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1019,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 87,
        },
        wind: {
          speed: 1.94,
          deg: 252,
          gust: 2.1,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-15 15:00:00",
      },
      {
        dt: 1731693600,
        main: {
          temp: 279.89,
          feels_like: 278.05,
          temp_min: 279.89,
          temp_max: 279.89,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1018,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 57,
        },
        wind: {
          speed: 2.58,
          deg: 227,
          gust: 2.74,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-15 18:00:00",
      },
      {
        dt: 1731704400,
        main: {
          temp: 278.83,
          feels_like: 276.55,
          temp_min: 278.83,
          temp_max: 278.83,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 2.89,
          deg: 217,
          gust: 5.2,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-15 21:00:00",
      },
      {
        dt: 1731715200,
        main: {
          temp: 278.09,
          feels_like: 275.33,
          temp_min: 278.09,
          temp_max: 278.09,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 13,
        },
        wind: {
          speed: 3.37,
          deg: 216,
          gust: 7.79,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-16 00:00:00",
      },
      {
        dt: 1731726000,
        main: {
          temp: 277.72,
          feels_like: 274.53,
          temp_min: 277.72,
          temp_max: 277.72,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1014,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 46,
        },
        wind: {
          speed: 3.91,
          deg: 219,
          gust: 10.18,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-16 03:00:00",
      },
      {
        dt: 1731736800,
        main: {
          temp: 277.32,
          feels_like: 273.88,
          temp_min: 277.32,
          temp_max: 277.32,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1012,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 50,
        },
        wind: {
          speed: 4.18,
          deg: 216,
          gust: 10.56,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-11-16 06:00:00",
      },
      {
        dt: 1731747600,
        main: {
          temp: 279.23,
          feels_like: 275.84,
          temp_min: 279.23,
          temp_max: 279.23,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1011,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 22,
        },
        wind: {
          speed: 4.99,
          deg: 219,
          gust: 11.39,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-11-16 09:00:00",
      },
    ],
    city: {
      id: 2759706,
      name: "Apeldoorn",
      coord: {
        lat: 52.2144,
        lon: 6.0194,
      },
      country: "NL",
      population: 136670,
      timezone: 3600,
      sunrise: 1731307803,
      sunset: 1731340203,
    },
  };
  return response;
  /* fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${openWeatherAPIKey}`
  )
    .then((res) => {
      console.log(JSON.stringify(res));
      return res;
    })
    .catch((err) => {
      return err;
    }); */
};
