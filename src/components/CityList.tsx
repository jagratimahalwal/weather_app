import React  from 'react'
import { Weather } from '../models/types'
import { kelvinToCelsius } from '../config/utils'
//Material UI
import { Card , CardMedia , CardContent , Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }),
);


interface CityWeatherData{
  Weather: Weather
}

const CityList: React.FC<CityWeatherData> = (props:CityWeatherData) => { 
	let weatherIcon = `http://openweathermap.org/img/wn/${props.Weather.weather[0].icon}@2x.png`   
	const classes = useStyles();

	
  return(
    <React.Fragment>
      <Card className={classes.root}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							{props.Weather.name}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Temperature { kelvinToCelsius(props.Weather.main.temp) }
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Maximum     { kelvinToCelsius(props.Weather.main.temp_max) }
						</Typography>	
						<Typography variant="subtitle1" color="textSecondary">
							Minimum     { kelvinToCelsius(props.Weather.main.temp_min) } 
						</Typography>
					</CardContent>
				</div>
					
				<CardMedia className={classes.cover}>
					<img src = {weatherIcon} alt="weather icon"/>
				</CardMedia>
      </Card>
    </React.Fragment>
  )
}

export default CityList