import React from "react";
import { FilterDiets } from '../Filters/FilterTypes/FilterDiets';
import { DesAsc } from './FilterTypes/DesAsc';
import { HealthScoreFilter } from './FilterTypes/HealthScoreFilter';
import { useDispatch, useSelector } from "react-redux";
import { setSelected, filterByDiets } from '../../redux/actions';
import style from "./SideBar.module.css";
import { useEffect } from "react";



export const SideBar = (props) => {

const dispatch = useDispatch();

const recetas2 = useSelector(state => state.recetas2);

const seleccionadas = useSelector(state => state.seleccionadas);

const search = useSelector(state => state.search);


//filtro de dietas
const handleChange2 = (event) => {
    const name = event.target.value;
    const buscar = seleccionadas.find(element => element === name);
    if (buscar) {
      dispatch(setSelected(seleccionadas.filter(dietas => dietas !== name)));
      props.setCheckboxState(seleccionadas.filter(dietas => dietas !== name))
    } else {
      dispatch(setSelected([...seleccionadas, event.target.value]));
    }
  };
  

  const filtroDietas = (seleccionadas, dietas) => {
    for (const id of seleccionadas) {
      const result = dietas?.find((element) => element == id);
      if(!result) return false;
    };
    return true;
  };


  const filtro = recetas2?.filter((element) => filtroDietas(seleccionadas, element.diets) && element.name?.toLowerCase().includes(search));
  

useEffect(() => {

  dispatch(filterByDiets(filtro));
  
}, [search, seleccionadas]);


  const handleClick = () => {
    window.location.reload();
}


  return (
    <div className={style.container}>
        <div className={style.side}>
          <div className={style.filterContainer}>
            <div className={style.desAsc}>
              <DesAsc/>
            </div>
            <div className={style.healthScore}>
              <HealthScoreFilter/>
            </div>
            <div className={style.dietsTextContainer}>
              <h4 className={style.dietsText}>Diets:</h4>
            </div>
            <div className={style.diets}>
              <FilterDiets handleChange2={handleChange2}/>
            </div>
              <button className={style.resetButton} onClick={(event) => handleClick(event)}><p>Reset Filters</p></button>
          </div>
        </div>
    </div>
  )
}