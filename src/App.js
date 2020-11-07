import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import BeerList from './Components/BeerList';
import RandomBeerDetails from './Components/RandomBeerDetails';
import AddBeer from './Components/AddBeer';
import Header from './Components/Header';
import Homepage from './Components/Home';
import SingleBeerDetail from './Components/SingleBeerDetail';

import service, {getBeer} from './service'


function App() {
  // getBeer('1234').then(beer => )
  return (
    <div className="App">

      <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/beers" component={BeerList}/>
          <Route exact path="/random-beer" component={RandomBeerDetails} />
          <Route exact path="/new-beer" component={AddBeer} />
          <Route exact path="/:id" component={SingleBeerDetail} />
      </Switch>
    </div>
  );
}

export default App;
