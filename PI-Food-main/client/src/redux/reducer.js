import { TRAER_RECETAS, MODIFICAR_RECETA, VACIAR_ID, CAMBIAR_PAGINA, SEARCH, SELECCIONADAS, TRAER_DIETAS, FILTRAR_DIETAS, ORDENAR_POR_NOMBRE, FILTRO_SCORE, CHECK, RECETA_ID } from './action-types';

const initialState = {
    recetas: [],
    recetas2: [],
    dietas: [],
    currentPage: 1,
    recetaId: [],
    seleccionadas: [],
    search: '',
    check: false
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case TRAER_RECETAS:
            return {
                ...state,
                recetas: action.payload,
                recetas2: action.payload
            }
        case MODIFICAR_RECETA:
            return {
                ...state,
                recetas: action.payload,
                recetas2: action.payload
            }
        case RECETA_ID:
            return {
                ...state,
                recetaId: action.payload
            }
        case VACIAR_ID:
            return {
                ...state,
                recetaId: []
            }
        case TRAER_DIETAS:
            return {
                ...state,
                dietas: action.payload
            }
        case FILTRAR_DIETAS:
            return {
                ...state,
                recetas: [...action.payload]
            }
        case CAMBIAR_PAGINA:
            return {
                ...state,
                currentPage: action.payload
            }
        case ORDENAR_POR_NOMBRE:
            const allRecipe = [...state.recetas];
            const sortedLetter = allRecipe.sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
            return {
                ...state,
                recetas: sortedLetter,
                currentPage: 2
            }
        case FILTRO_SCORE:
            let allRecipes = [...state.recetas];
            let orderByHealthScore;
            if(action.payload === 'maximo') {
                orderByHealthScore = allRecipes.sort((a, b) => b.healthScore - a.healthScore);
            } else {
                orderByHealthScore = allRecipes.sort((a, b) => a.healthScore - b.healthScore);
            }
            return {
                ...state,
                recetas: orderByHealthScore,
                currentPage: 2
            }
        case SELECCIONADAS: 
            return {
                ...state,
                seleccionadas: [...action.payload]
            }
        case SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case CHECK:
            return {
                ...state,
                check: action.payload
            }
        // case POST_RECIPE:
        //     return {
        //         ...state
        //     }
        default:
            return { ...state }
    }
};

export default rootReducer;