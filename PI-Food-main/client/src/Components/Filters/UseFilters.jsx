import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'

export const UseFilters = (props) => {
    const dispatch = useDispatch();
    const recetas2 = useSelector(state => state.recetas2);

    const seleccionadas = useSelector(state => state.seleccionadas);
    const search = useSelector(state => state.search);

    const handleSort = (event) => {
        event.preventDefault()
        dispatch(actions.sortByName(event.target.value))
        dispatch(actions.changePag(1))
    }

    const handleChange2 = (event) => {
        const name = event.target.value 
        const search = seleccionadas.find(element => element === name)
        if(search) {
            dispatch(actions.setSelected(seleccionadas.filter(dietas => dietas !== name)))
            props.setCheckboxState(seleccionadas.filter(dietas => dietas !== name))
        } else {
            dispatch(actions.setSelected([...seleccionadas, event.target.value]))
        }
    };

    const filtroDietas = (seleccionadas, dietas) => {
        for(const id of seleccionadas) {
            const result = dietas?.find((element) => element.id == id)
            if(!result) return false
        }
    return true
    }
    const filtro = recetas2?.filter((element) => filtroDietas(seleccionadas, element.diets) && element.name.toLowerCase().includes(search));

// Barra de busqueda

const handleChange = (event) => {
    event.preventDefault()
    dispatch(actions.setSearch(event.target.value))
}

const handleClick = () => {
    window.location.reload()
}

const filter = (event) => {
    event.preventDefault()
    dispatch(actions.filtroScoreH(event.target.value))
    dispatch(actions.changePag(1))
}

return {
    handleSort,
    recetas2,
    seleccionadas,
    search,
    dispatch,
    actions,
    handleChange2,
    filtroDietas,
    handleChange,
    filtro,
    handleClick,
    filter
}
};
