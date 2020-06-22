const kelvinOffsetCelsius = 273.15;

export const kelvinToCelsius = ( tempKelvin:number ) => {
  return (tempKelvin - kelvinOffsetCelsius).toFixed(2);
}