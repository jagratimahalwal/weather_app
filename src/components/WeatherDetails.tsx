import React from "react";
import { WeatherContext } from "../context/WeatherContext";
import { kelvinToCelsius } from "../config/utils";

const WeatherDetails: React.FC<{}> = () => {
  const { weather } = React.useContext(WeatherContext) || {
    weather: null,
  };

  return (
    <>
      {weather && (
        <div
          className="flex flex-col gap-2 w-full 
        "
        >
          <h1>{kelvinToCelsius(weather.main.temp)} celsius</h1>
          <h1>Feels like {kelvinToCelsius(weather.main.feels_like)}</h1>
          <h1> Max {kelvinToCelsius(weather.main.temp_max)}</h1>
          <h1>Min {kelvinToCelsius(weather.main.temp_min)}</h1>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
