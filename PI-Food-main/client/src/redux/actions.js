import axios from 'axios';
import { TRAER_RECETAS, LIMPIAR_DETAIL, VACIAR_ID, LOADER, CHANGE_PAG, SEARCH, SET_SELECTED, TRAER_DIETAS, FILTER_BY_DIETS, SORT_BY_NAME, FILTRO_SCORE, RECETA_ID } from './action-types';

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

export const limpiarDetail = () => {
    return {
        type: LIMPIAR_DETAIL,
    }
}

export const changePag = (pagenumber) => {
    return {
        type: CHANGE_PAG,
        payload: pagenumber++
    }
};

export const setSearch = (payload) => {
    return {
        type: SEARCH,
        payload,
    }
};

export const setSelected = (payload) => {
    return {
        type: SET_SELECTED,
        payload,
    }
};

export const traerDietas = () => {
    return async (dispatch) => {
        let receta = await axios(`/diets/`);
        return dispatch({type: TRAER_DIETAS, payload: receta.data});
    }
};

export const filterByDiets = (payload) => {
    return {
        type: FILTER_BY_DIETS,
        payload: payload
    }
};

export const sortByName = (payload) => {
    return {
        type: SORT_BY_NAME,
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
    try {
        return async (dispatch) => {
            let receta = await axios(`/recipes/${id}`);
            return dispatch({type: RECETA_ID, payload: receta.data});
        }
    } catch (error) {
        console.log(error);
    }
};


export const check = (payload) => {
    return {
        type: 'CHECK',
        payload
    }
};

export const postRecipes = (payload) => {
    return async function (dispatch) {
        try {
            const postRecipe = await axios('/recipes/', payload)
            .then((a) => alert(a))
            return postRecipe;
        } catch (error) {
            console.log(error)
        }
    }
};

export const loading = () => {
    return {type: LOADER}
}