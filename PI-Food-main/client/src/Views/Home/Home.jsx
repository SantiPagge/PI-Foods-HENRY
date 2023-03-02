import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RecipeCard } from "../../Components/Recipes/RecipeCard";
import style from './Home.module.css';
import { traerReceta, loading } from "../../redux/actions";
import { Pagination } from "../../Components/Pagination/Pagination";
import { useState } from "react";
import { SideBar } from "../../Components/Filters/SideBar";
import { Loader } from "../../Components/Loader/Loader";

export const Home = () => {

    const dispatch = useDispatch();
    const recetas = useSelector(state => state.recetas);
    const currentPage = useSelector(state => state.currentPage);
    const loader = useSelector(state => state.loader);

    useEffect( async () => {
        dispatch(loading())
        await dispatch(traerReceta())
        dispatch(loading())
    }, [dispatch])

const [recipesPerPage] = useState(9); //cuantas recetas x pagina
const indexOfLastRecipe = currentPage * recipesPerPage; //pagina x cantidad  recetas en pagina
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
const currentRecipes = recetas.slice(indexOfFirstRecipe, indexOfLastRecipe); //agarra el indice de la primer y ultima receta

if (loader === true) {
    return (
        <div className={style.background}>
            <div>
                <div className={style.paginationBox}>
                    <div className={style.pagination}>
                        <Pagination 
                        recipesPerPage={recipesPerPage} 
                        recetas={recetas.length} 
                        currentPage={currentPage}/>
                    </div>
                </div>
                    <div className={style.sideBar}>
                        <SideBar/>
                    </div>
                        <div className={style.cards}>
                            {currentRecipes?.map((r, index) => (<RecipeCard
                                key = {`r.${index}`}
                                image = {r.image}
                                name = {r.name}
                                diets = {r.diets}
                                healthScore = {r.healthScore}
                                id = {r.id}
                            />))}
                        </div>
            </div>
        </div>
    )
    } else {
        return (
            <Loader/>
        )
    }
}