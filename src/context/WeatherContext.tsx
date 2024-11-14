import React, { createContext, useState, ReactNode, useMemo } from "react";
import { WeatherData } from "../models/types";
// Define the shape of the weather data and context

interface WeatherContextType {
  weather: WeatherData | null;
  setWeather: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  todayForecast: any;
  setTodayForecast: React.Dispatch<React.SetStateAction<any>>;
  weatherForecast: any;
  setWeatherForecast: React.Dispatch<React.SetStateAction<any>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a Context with a default value of null
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Create a WeatherProvider component
const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherForecast, setWeatherForecast] = useState<any>(null);
  const [todayForecast, setTodayForecast] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Return the children wrapped in the Provider's context
  const contextValue = useMemo(
    () => ({
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
    }),
    [weather, weatherForecast, error, loading]
  );

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
