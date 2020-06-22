import React, { useState } from 'react';
//import importScript from '../appending'
import { Container, Typography , Grid , TextField , Button} from '@material-ui/core/'
declare const window: any;

interface IWeatherSearch{
	onSearch: any;
}

const AddCity: React.FC<IWeatherSearch> = (props: IWeatherSearch) => {
	//importScript("../../public/analytics/someFunctions");
	const [cityName , setCity] = useState<string>('')
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist()
		setCity(event.target.value)
	}
	const handleSubmit = () => {
		window.triggerOnClick()
		props.onSearch(cityName)
		setCity('')
	}

	/* useEffect(() => {
		const script = document.createElement('script');
		script.src = "../../public/analytics/someFunctions";
		script.async = true;
		document.head.appendChild(script);
	  return () => {
		  document.head.removeChild(script);
		}
	  }, []); */

  return(
    <React.Fragment>
			 <Container component="main" maxWidth="xs">
				<Typography component="h3" variant="h6">
					Add Your City
				</Typography>
				<Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
							<TextField 
								name="cityName" 
								variant="outlined" 
								required 
								fullWidth 
								value={cityName}
								id="cityName" 
								label="City" 
								onChange={handleChange}
							/>
						</Grid>
						<Button variant="contained" onClick={handleSubmit}>Add City</Button>
				</Grid>
			 </Container>
		</React.Fragment>
  )
}

export default AddCity;