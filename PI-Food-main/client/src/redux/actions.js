import axios from 'axios';
import { TRAER_RECETAS, VACIAR_ID, CAMBIAR_PAGINA, SEARCH, SELECCIONADAS, TRAER_DIETAS, FILTRAR_DIETAS, ORDENAR_POR_NOMBRE, FILTRO_SCORE, RECETA_ID } from './action-types';

export const traerReceta = () => {
    return async (dispatch) => {
        let receta = await axios(`/recipes/`);
        return dispatch({type: TRAER_RECETAS, payload: receta.data});
    }
};

export const vaciarId = () => {
    return {
        type: VACIAR_ID
    }
}

export const cambiarPagina = (pagenumber) => {
    return {
        type: CAMBIAR_PAGINA,
        payload: pagenumber++
    }
};

export const setSearch = (payload) => {
    return {
        type: SEARCH,
        payload,
    }
};

export const setSeleccionadas = (payload) => {
    return {
        type: SELECCIONADAS,
        payload,
    }
};

export const traerDietas = () => {
    return async (dispatch) => {
        let receta = await axios(`/diets/`);
        return dispatch({type: TRAER_DIETAS, payload: receta.data});
    }
};

export const filtrarDietas = (payload) => {
    return {
        type: FILTRAR_DIETAS,
        payload: payload
    }
};

export const ordenarPorNombre = (payload) => {
    return {
        type: ORDENAR_POR_NOMBRE,
        payload
    }
};

export const filtroScoreH = (payload) => {
    return {
        type: FILTRO_SCORE,
        payload
    }
};  

export const recetaId = (id) => {
    return async (dispatch) => {
        let receta = await axios(`/recipes/${id}`);
        return dispatch({type: RECETA_ID, payload: receta.data});
    }
};


export const check = (payload) => {
    return {
        type: 'CHECK',
        payload
    }
};

export const postRecipes = (payload) => {
    return async function () {
        const postRecipe = await axios('/recipes/', payload);
        return postRecipe;
    }
};

export const modificar = (id, payload) => {
    return async function () {
        const modificar = await axios(`/recipes/${id}`, payload);
        return modificar;
    }
};


