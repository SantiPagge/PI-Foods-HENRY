import React from "react";
import { FilterDiets } from '../Filters/FilterTypes/FilterDiets';
import { DesAsc } from './FilterTypes/DesAsc';
import { HealthScoreFilter } from './FilterTypes/HealthScoreFilter';
import { useDispatch, useSelector } from "react-redux";
import { setSelected, filterByDiets, setSearch } from '../../redux/actions';
import style from "./SideBar.module.css";
import { SearchBar } from './SearchBar';
import { useEffect } from "react";



export const SideBar = (props) =>{
const dispatch = useDispatch()    

const recetas2 = useSelector(state => state.recetas2)

const seleccionadas = useSelector(state => state.seleccionadas)
const search = useSelector(state => state.search)


//filtro de dietas
const handleChange2 = (event) => {

    const name = event.target.value
    const buscar = seleccionadas.filter(element => element === name)
    if (typeof props.setCheckboxState === 'function') {
      // dispatch(setSelected(seleccionadas.filter(dietas => dietas !== name)))
      props.setCheckboxState(buscar.filter(dietas => dietas !== name))
    }else{
      dispatch(setSelected([...buscar, event.target.value]))
  }
  };
  
 const filtroDietas = (seleccionadas, dietas) =>{
    for(const id of seleccionadas){
      const result = dietas?.find((element) => element == id)
      if(!result) return false
        }
    return true
   } 
   const filtro = recetas2?.filter((element) => filtroDietas(seleccionadas, element.diets) && element.name?.toLowerCase().includes(search)) 
  
//barrra de busqueda
const handleChange =(event) => { 
    event.preventDefault() 
    dispatch(setSearch(event.target.value))
}

useEffect(() => {

    dispatch(filterByDiets(filtro));
  
  }, [search, seleccionadas])


  const handleClick = () => {
    window.location.reload();
}


    return (
        <div>
        <div className={style.side}>
        <div className={style.filterConteiner}>
            <SearchBar handleChange={handleChange} className= {style.filter} />
            <DesAsc className={style.filter}/>

            <HealthScoreFilter className={style.filter}/>
            <FilterDiets handleChange2={handleChange2}  />
            <button className={style.button} onClick={(event) => handleClick(event)}><p>Reset Filters</p></button>
   

        </div>
        </div>

        </div>

    )
}