import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { ForecastItem } from "../models/types";
import { kelvinToCelsius } from "../config/utils";

interface WeatherForecastLineChartProps {
  forecastData: ForecastItem[];
}

const TemperatureChart: React.FC<WeatherForecastLineChartProps> = ({
  forecastData,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!forecastData || !svgRef.current) return;

    // Prepare the data
    const data: Array<ForecastItem> = forecastData;

    // Create margin, width, and height for the chart
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 500;
    const height = 400;
    const innerWidth = 500 - margin.left - margin.right;
    const innerHeight = 300 - margin.top - margin.bottom;

    // Create an SVG container
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Prepare scales
    const x = d3
      .scaleTime()
      .range([0, innerWidth])
      .domain(d3.extent(data, (d) => new Date(d.dt * 1000)) as [Date, Date]);

    const y = d3.scaleLinear().range([innerHeight, 0]);
    y.domain([
      d3.min(data, (d) => d3.min([0, kelvinToCelsius(d.main.temp)])) ?? 0,
      d3.max(data, (d) =>
        d3.max([kelvinToCelsius(d.main.temp_max), kelvinToCelsius(d.main.temp)])
      ) ?? 0,
    ]);

    // Create line generators
    const line = d3
      .line<ForecastItem>()
      .x((d) => x(new Date(d.dt * 1000)))
      .y((d) => y(kelvinToCelsius(d.main.temp)));

    const minTempLine = d3
      .line<ForecastItem>()
      .x((d) => x(new Date(d.dt * 1000)))
      .y((d) => y(kelvinToCelsius(d.main.temp_min)));

    const maxTempLine = d3
      .line<ForecastItem>()
      .x((d) => x(new Date(d.dt * 1000)))
      .y((d) => y(kelvinToCelsius(d.main.temp_max)));

    // Append the line paths
    svg
      .append("path")
      .data([data])
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#22c55e")
      .attr("stroke-width", 2)
      .attr("d", minTempLine);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#ef4444")
      .attr("stroke-width", 2)
      .attr("d", maxTempLine);

    // Add X Axis
    const xAxis = d3
      .axisBottom(x)
      .ticks(d3.timeHour.every(3))
      .tickFormat((d) => d3.timeFormat("%H:%M")(new Date(d * 1000)));
    svg
      .append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(xAxis);

    // Add Y Axis
    svg.append("g").call(d3.axisLeft(y));
  }, [forecastData]);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Weather Forecast</h3>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default TemperatureChart;
