import axios from 'axios';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import { Welcome } from './Components/views/Welcome/Welcome';

// axios.defaults.baseURL = "https://pi-food-production-3adc.up.railway.app/";
axios.defaults.baseURL = 'http://localhost:5432';

function App() {
  // const location = useLocation()
  return (
    <div className="App">
 {/* {location.pathname === '/home' || location.pathname === '/create' || location.pathname === '/detail/:id' ? <Nav/> : null } */}
    <Switch>
      <Route exact path='/' component={Welcome}/>
    </Switch>
    </div>
  );
}

export default App;
