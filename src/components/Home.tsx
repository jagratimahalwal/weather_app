import React , {useEffect , useState} from 'react';
import AddCity from './AddCity'
import CityList from './CityList'
import {RootState} from '../models/types'
import {setLocation} from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../actions/actions'
import { useHistory } from 'react-router-dom';

//Material UI
import { CssBaseline , Container ,  Grid , Typography } from '@material-ui/core';

const Home: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const searchLocations = useSelector((state: RootState) => state.weather.searchedLocations);
  const weatherData = useSelector((state:RootState) => state.weather.weatherData);
	const [showList, setList] = useState(false)
	const errorMessage = useSelector((state:RootState) => state.weather.error)

	const history = useHistory(); 

  const handleSearch = (cityName: string) => {
		//If city already exists then do not dispatch again
		if(searchLocations.includes(cityName) === false){
            //dispatch searchlocation to location list
        dispatch(setLocation({...searchLocations, searchedLocations:cityName}))
        dispatch(getWeatherData(cityName))
      }
    }

    useEffect(()=>{
    	if(searchLocations.length<1){
        setList(false)
        //console.log(searchLocations)
      }else {
        setList(true)
      }
    },[searchLocations])

    return(
      <React.Fragment>
    		<CssBaseline />
       <Container maxWidth="lg">
          <AddCity onSearch={handleSearch}/>
					<CssBaseline />
					<Typography >
						 { errorMessage }
					</Typography>
					<CssBaseline />
          <Grid container spacing={1} >
            { (showList) && (searchLocations.length > 0) && (
                <Grid container spacing={4} >
                    { (weatherData).map((city, indx)=>(
                        <Grid item key={indx} xs={12} md={3} onClick={()=> history.push(`/details/${city.id}`)}>
                             <CityList  Weather={city} />
                        </Grid>  
                    )) }
                </Grid>
            ) }
          </Grid>
        </Container>
    	</React.Fragment>
    )
}

export default Home;