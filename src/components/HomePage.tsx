import React from "react";
import { WeatherContext } from "../context/WeatherContext";
import { getWeatherByLongLat, getWeatherForecast } from "../config/api";

import WeatherIcon from "./WeatherIcon";
import WeatherDetails from "./WeatherDetails";
import ForecastCard from "./ForecastCard";
import "./HomePage.css";
import { ForecastItem } from "../models/types";
import ForecastList from "./ForecastList";

const HomePage: React.FC<{}> = () => {
  const [location, setLocation] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  const {
    weather,
    setWeather,
    weatherForecast,
    setWeatherForecast,
    todayForecast,
    setTodayForecast,
    error,
    setError,
    loading,
    setLoading,
  } = React.useContext(WeatherContext) || {
    weather: null,
    setWeather: () => {},
    weatherForecast: null,
    setWeatherForecast: () => {},
    todayForecast: null,
    setTodayForecast: () => {},
    error: null,
    setError: () => {},
    loading: false,
    setLoading: () => {},
  };

  React.useEffect(() => {
    getLocation();
    if (location.latitude !== 0 && location.longitude !== 0) {
      const weatherData = getWeatherByLongLat(
        location.longitude,
        location.latitude
      );
      const forecastData = getWeatherForecast(
        location.latitude,
        location.longitude
      );
      setTodayForecast(
        forecastData.list.filter((item) => {
          return new Date(item.dt * 1000).getDate() == new Date().getDate();
        })
      );
      setWeatherForecast(
        forecastData.list.filter((item) => {
          return new Date(item.dt * 1000).getDate() !== new Date().getDate();
        })
      );
      setWeather(weatherData);
      setLoading(false);
    }
  }, [location.latitude, location.longitude]);

  const getLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError("");
        },
        (err) => setError("Unable to retrieve location. " + err.message)
      );
    }
  };

  return (
    <div className="grid grid-cols-10 gap-2 bg-blue-50 mt-36">
      <div className="col-start-3 col-span-6 bg-blue-50 justify-self-center border p-10 w-full rounded-lg shadow-lg shadow-blue-100">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {weather && (
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{weather.name}</h1>
            <div className="flex flex-row-reverseq gap-4 justify-between items-center w-full">
              <WeatherIcon />
              <WeatherDetails />
            </div>
          </div>
        )}
        <div className="w-full overflow-x-auto overflow-y-hidden my-10">
          <div className="flex flex-row w-max space-x-4">
            {todayForecast?.map((weather: ForecastItem) => (
              <ForecastCard
                key={weather.dt}
                temperature={weather.main.temp}
                forecasedDate={weather.dt}
              />
            ))}
          </div>
        </div>
        <ForecastList />
      </div>
    </div>
  );
};

export default HomePage;
