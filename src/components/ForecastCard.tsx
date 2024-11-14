import React from "react";
import { kelvinToCelsius } from "../config/utils";

const ForecastCard: React.FC<{
  temperature: number;
  forecasedDate: number;
}> = ({ temperature, forecasedDate }) => {
  return (
    <div className="weather-forecast-card mx-2 my-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-gray-500">
          {new Date(forecasedDate * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="text-xl font-bold">{kelvinToCelsius(temperature)}°</p>
        <p className="text-gray-500">
          {new Date(forecasedDate * 1000).toLocaleDateString([], {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;
/* 
// WeatherForecastCard Parallax effect
import React, { useRef, useEffect } from "react";
import "./WeatherForecastCard.css";

interface WeatherForecastCardProps {
  temperature: number;
  forecasedDate: number;
}

/**
 * WeatherForecastCard component displays the weather forecast for a given date.
 * It includes a temperature value and a formatted forecast date.
 *
 * The component applies a parallax scrolling effect to the card element
 * using the IntersectionObserver API.
 *
 * Props:
 * - temperature: The temperature value in Kelvin.
 * - forecasedDate: The forecast date represented as a Unix timestamp.
 *
 * @returns A styled card component displaying the temperature and date.
 */
/* const WeatherForecastCard: React.FC<WeatherForecastCardProps> = ({
  temperature,
  forecasedDate,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const card = entry.target as HTMLDivElement;
        const parallaxFactor = 0.2; // Reduced value for a smoother parallax effect

        // Adjust for both directions by centering the effect
        const x =
          (entry.boundingClientRect.left - window.innerWidth / 2) *
          parallaxFactor;

        card.style.transform = `translateX(${x}px)`;
      });
    };

    if (cardRef.current) {
      observer = new IntersectionObserver(handleObserve, {
        rootMargin: "0px",
        threshold: 0,
      });
      observer.observe(cardRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="weather-forecast-card w-32">
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-2xl font-bold">{Math.round(temperature)}°</p>
        <p className="text-gray-500">
          {new Date(forecasedDate * 1000).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default WeatherForecastCard;
 */
