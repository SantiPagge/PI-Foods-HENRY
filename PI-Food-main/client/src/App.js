import axios from 'axios';
import React from 'react';
import style from './App.css'
import { Route, Switch } from 'react-router';
import { Welcome } from './Views/Welcome/Welcome';
import { Home } from './Views/Home/Home'
import { Detail } from './Views/Details/Detail'
import { RecipesForm } from './Views/RecipesForm/RecipesForm';

axios.defaults.baseURL = "pi-foods-henry-production-ec7e.up.railway.app/";
// axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <div className={style.all}>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/create' component={RecipesForm}/>
          <Route path='/detail/:id' component={Detail}/>
        </Switch>
    </div>
  );
}

export default App;
