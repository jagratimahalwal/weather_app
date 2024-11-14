import React from "react";
import { WeatherContext } from "../context/WeatherContext";
import { kelvinToCelsius } from "../config/utils";
import { ForecastItem } from "../models/types";

const ForecastList: React.FC<{}> = () => {
  const { weatherForecast } = React.useContext(WeatherContext) || {
    weatherForecast: null,
  };

  const groupedForecasts =
    (weatherForecast as ForecastItem[])?.reduce<Record<string, ForecastItem[]>>(
      (acc, forecast) => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString([], {
          weekday: "short",
          month: "short",
          day: "numeric",
        });

        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(forecast);

        return acc;
      },
      {}
    ) ?? {};

  return (
    <div>
      {Object.entries(groupedForecasts).map(([date, forecasts]) => (
        <div key={date} className="bg-white p-4 rounded-lg shadow-md my-8">
          <h3 className="text-xl font-semibold mb-2">{date}</h3>
          <div className="flex overflow-x-auto space-x-4">
            {forecasts.map((forecast: ForecastItem) => (
              <div key={forecast.dt} className="text-center">
                <p className="text-gray-500">
                  {new Date(forecast.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p>{kelvinToCelsius(forecast.main.temp)}°C</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastList;
