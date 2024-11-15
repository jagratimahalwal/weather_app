const kelvinOffsetCelsius = 273.15;

export const kelvinToCelsius = (tempKelvin: number): number => {
  return parseFloat((tempKelvin - kelvinOffsetCelsius).toFixed(1));
};
