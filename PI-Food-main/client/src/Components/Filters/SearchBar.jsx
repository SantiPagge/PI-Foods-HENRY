import React from "react";
import * as actions from '../../redux/actions'
import style from './SearchBar.module.css'
import { useEffect } from "react";
import { UseFilters } from "./UseFilters"
import { HealthScoreFilter } from "./FilterTypes/HealthScoreFilter";
import { FilterDiets } from './FilterTypes/FilterDiets'
import { NormalSearch } from './FilterTypes/NormalSearch'
import { DesAsc } from './FilterTypes/DesAsc'



export const SearchBar = (props) =>{

const {HandleSort, seleccionadas, search, dispatch, actions, handleChange2, handleChange, filtro, handleClick, filter} = UseFilters(props)

useEffect(() => {

    dispatch(actions.filterByDiets(filtro));
    dispatch(actions.changePag(1));
  }, [search, seleccionadas])


  return (
    <div>
    <div className={style.side}>
    <div className={style.filterConteiner}>
        <NormalSearch handleChange={handleChange} />
        <hr></hr>
        <DesAsc HandleSort={HandleSort}/>
        <hr></hr>

        <HealthScoreFilter filter={filter}/>
        <FilterDiets handleChange2={handleChange2}  />
        <button className={style.button} onClick={(event) => handleClick(event)}><p>Limpiar filtros</p></button>


    </div>
    </div>

    </div>

)
}