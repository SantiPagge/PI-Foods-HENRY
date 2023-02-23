import axios from 'axios';
import './App.css';
import React from 'react';
import { useLocation } from 'react-router'
import { Route, Switch } from 'react-router';
import { Welcome } from './Views/Welcome/Welcome';
import { Home } from './Views/Home/Home'
import { Nav } from './Components/Nav/Nav'
import { Detail } from './Views/Details/Detail'

// axios.defaults.baseURL = "https://pi-food-production-3adc.up.railway.app/";
axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  const location = useLocation()
  return (
    <div className="App">
 {location.pathname === '/home' || location.pathname === '/create' || location.pathname === '/detail/:id' ? <Nav/> : null }
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route exact path='/home' component={Home}/>
      {/* <Route path='/create' component={CreateRecipe}/> */}
      <Route path='/detail/:id' component={Detail}/>
      {/* <Route path='/modify/:id' component={Modify}/> */}
      {/* <Route path='/menu' component={Sidebar}/> */}
      {/* <Route path='/*' component={Error}/> */}
    </Switch>
    </div>
  );
}

export default App;
