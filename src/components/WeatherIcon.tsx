import React, { Suspense } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Sun from "./svgComponents/Sun";
import Moon from "./svgComponents/Moon";
import Cloud from "./svgComponents/Cloud";

const WeatherIcon: React.FC<{}> = () => {
  const { weather } = React.useContext(WeatherContext) || {
    weather: null,
  };

  const iconMap: { [key: string]: React.FC<{}> } = {
    "01d": Sun,
    "01n": Moon,
    "02n": Cloud, // few cloud
    "02d": Cloud,
    "03d": Cloud, // scattered cloudes
    "04d": Cloud, // broken clouds
    "04n": Cloud, // broken clouds
    "09d": Cloud, // shower rain
    "09n": Cloud, // shower rain
    "10d": Cloud, // rain
    "10n": Cloud, // rain
    "11d": Cloud, // thunderstorm
    "11n": Cloud, // thunderstorm
    "13d": Cloud, // snow
    "13n": Cloud, // snow
    "50d": Cloud, // mist
    "50n": Cloud, // mist
  };

  const getWeatherIcon = () => {
    const icon = weather?.weather[0].icon ?? "01d";
    const IconComponent = iconMap[icon];
    if (IconComponent) {
      return <IconComponent />;
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>{getWeatherIcon()}</div>
    </Suspense>
  );
};

export default WeatherIcon;
