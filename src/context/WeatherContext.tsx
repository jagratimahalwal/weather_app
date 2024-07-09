import React, { createContext, useState, ReactNode } from "react";

// Define the shape of the weather data and context
interface WeatherData {
  temperature: number;
  condition: string;
}

interface WeatherContextType {
  weather: WeatherData | null;
  setWeather: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

// Create a Context with a default value of null
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Create a WeatherProvider component
const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Return the children wrapped in the Provider's context
  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
