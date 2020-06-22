import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../models/types'
import { CssBaseline , Container ,  Grid , Typography , Paper } from '@material-ui/core';
import { Theme,  makeStyles } from '@material-ui/core/styles';
import CityList from './CityList'
import { useHistory } from 'react-router-dom';


interface RouteParams {id: string}

const useStyles = makeStyles((theme:Theme) => ({	
	mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
	},
	mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}))

const CityDetails: React.FC<RouteComponentProps<RouteParams>> = ({match}:RouteComponentProps<RouteParams>) => {

	const classes = useStyles({});
	const history = useHistory();

	let cityData: any //= {"coord":{"lon":77.22,"lat":28.67},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":303.42,"feels_like":301.57,"temp_min":303.15,"temp_max":303.71,"pressure":1010,"humidity":28},"visibility":4200,"wind":{"speed":2.6,"deg":290},"clouds":{"all":40},"dt":1586441300,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1586392303,"sunset":1586437990},"timezone":19800,"id":1273294,"name":"Delhi","cod":200}
	const weatherData = useSelector((state:RootState) => state.weather.weatherData);
	const urlId  = match.params.id;
	if(weatherData.length > 0){
		console.log("weather data > 0")
		cityData = weatherData.find(data => (data.id === parseInt(urlId) ))
	}else {
		console.log("weather data else part")
		history.push('/')      //If no data is there in store ans user is accessing the url directly.
	}	
	
  return (
    <React.Fragment>
			<CssBaseline />
			{(weatherData.length) > 0 && (
				<Container maxWidth="lg">
				<Paper className={classes.mainFeaturedPost}>
					<div className={classes.mainFeaturedPostContent}>
							<Typography component="h1" variant="h3"> 
									{ cityData.name }
							</Typography>
					</div>
				</Paper>	
					<Grid container spacing={4} >
						<Grid item xs={12} md={9}>
								<CityList Weather={cityData} />
						</Grid>
					</Grid>
				
				</Container>
			)}
        
    </React.Fragment>
  )
}

export default CityDetails;