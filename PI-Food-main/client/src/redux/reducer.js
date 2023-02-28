import { TRAER_RECETAS, POST_RECIPE, MODIFICAR_RECETA, LOADER, VACIAR_ID, SEARCH, SET_SELECTED, TRAER_DIETAS, FILTER_BY_DIETS, SORT_BY_NAME, FILTRO_SCORE, CHECK, RECETA_ID, LIMPIAR_DETAIL, CHANGE_PAG } from './action-types';

const initialState = {
    recetas: [],
    recetas2: [],
    dietas: [],
    currentPage: 1,
    recetaId: [],
    seleccionadas: [],
    search: '',
    check: false,
    loader: true
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case TRAER_RECETAS:
            return {
                ...state,
                recetas: action.payload,
                recetas2: action.payload,
                detailId: []
            }

        case LIMPIAR_DETAIL:
            return {
                ...state,
                detailId: []
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
        case FILTER_BY_DIETS:
            return {
                ...state,
                recetas: [...action.payload]
            }
        case CHANGE_PAG:
            return {
                ...state,
                currentPage: action.payload
            }
        case SORT_BY_NAME:
            const allRecipe = [...state.recetas];
            const sortedLetter = allRecipe.sort((a, b) => {
            const nameA = typeof a.name === 'string' ? a.name : '';
            const nameB = typeof b.name === 'string' ? b.name : '';
            if (action.payload === 'Asc') {
            return nameA.localeCompare(nameB);
                } else if (action.payload === 'Des') {
                return nameB.localeCompare(nameA);
                 } else {
                return 0;
         }
            });
            return {
                 ...state,
                recetas: sortedLetter,
                currentPage: 1  
        }
        case FILTRO_SCORE:
            let allRecipes = [...state.recetas];
            let orderByHealthScore;
            if(action.payload === 'max') {
                orderByHealthScore = allRecipes.sort((a, b) => b.healthScore - a.healthScore);
            } else {
                orderByHealthScore = allRecipes.sort((a, b) => a.healthScore - b.healthScore);
            }
            return {
                ...state,
                recetas: orderByHealthScore,
                currentPage: 1
            }
        case SET_SELECTED: 
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
        case POST_RECIPE:
            return {
                ...state,
                recetas: [...state.recetas, action.payload]
            }
        case LOADER:
            const loader = state.loader
            if (loader === true) {
                return {
                    ...state,
                    loader: false
                }
            } else {
                return {
                ...state,
                loader: true
            }
        }
        default:
            return {...state}
    }
};

export default rootReducer;