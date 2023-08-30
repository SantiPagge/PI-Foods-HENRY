import axios from 'axios';
import React from 'react';
import style from './App.css'
//import { Routes, Route } from 'react-router';
import { useRoutes, Outlet, Route } from 'react-router-dom'; // Cambiado a useRoutes y Outlet
import { Welcome } from './Views/Welcome/Welcome';
import { Home } from './Views/Home/Home'
import { Detail } from './Views/Details/Detail'
import { RecipesForm } from './Views/RecipesForm/RecipesForm';

axios.defaults.baseURL = "https://pi-foods-henry-production-053d.up.railway.app";
// axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  const routes = useRoutes([ // Cambiado a useRoutes
    { path: '/', element: <Welcome /> },
    { path: '/home', element: <Home /> },
    { path: '/create', element: <RecipesForm /> },
    { path: '/detail/:id', element: <Detail /> }
  ]);

  return (
    <div className={style.all}>
      {routes}
    </div>
  );
}

export default App;
