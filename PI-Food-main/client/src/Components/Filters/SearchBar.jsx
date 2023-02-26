import React from "react";
import * as actions from '../../redux/actions'
import style from './SearchBar.module.css'
import { useEffect } from "react";
import { UseFilters } from "./UseFilters"


export const SearchBar = (props) =>{

const {HandleSort, seleccionadas, search, dispatch, actions, handleChange2, handleChange, filtro, handleClick, filter} = UseFilters(props)

useEffect(() => {

    dispatch(actions.filterByDiets(filtro));
    dispatch(actions.changePag(1));
  }, [search, seleccionadas])


    return (
        <div>
            <UseFilters>Filtros</UseFilters>
        </div>
    )
}