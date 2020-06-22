import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import  Home  from './Home'
import CityDetails from './Details'
import store from '../store'

const Main: React.FC<{}> = () => {
  return(
    <Provider store={store}>
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={CityDetails} />
        </Switch>
      </BrowserRouter>
			</Provider>
  )
}

export default Main;