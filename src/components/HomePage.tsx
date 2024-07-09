import React from "react";
import { getWeatherByCity } from "../config/api";
import { WeatherData } from "../models/types";
import { kelvinToCelsius } from "../config/utils";
import Arrow from "./Arrow";
import Sun from "./Sun";
import Moon from "./Moon";
import Cloud from "./Cloud";

const HomePage: React.FC<{}> = () => {
  const cityName = "randomcity";
  const [weatherdata, setWeatherData] = React.useState<WeatherData | null>(
    null
  );

  React.useEffect(() => {
    const data = getWeatherByCity("randomcity");
    setWeatherData(data);
  }, [cityName]);

  return (
    <div className="grid grid-cols-10 gap-2 bg-blue-50 mt-36">
      <div className="col-start-3 col-span-6 bg-blue-50 justify-self-center border p-10 w-full rounded-lg shadow-lg	shadow-blue-100	">
        {weatherdata && (
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{weatherdata.name}</h1>
            <h1>{kelvinToCelsius(weatherdata.main.temp)} celsius</h1>
            <h1>{weatherdata.weather[0].main}</h1>
            <h1>{kelvinToCelsius(weatherdata.main.feels_like)}</h1>
            <h1>{kelvinToCelsius(weatherdata.main.temp_max)}</h1>
            <h1>{kelvinToCelsius(weatherdata.main.temp_min)}</h1>
            <Sun />
            <Moon />
            <Cloud />
            <Arrow />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
