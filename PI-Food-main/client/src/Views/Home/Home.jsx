import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RecipeCard } from "../../Components/Recipes/RecipeCard";
import style from './Home.module.css';
import { traerReceta } from "../../redux/actions";
import { Pagination } from "../../Components/Pagination/Pagination";
import { useState } from "react";

export const Home = () => {

    const dispatch = useDispatch();
    const recetas = useSelector(state => state.recetas);
    const currentPage = useSelector(state => state.currentPage);

    useEffect(() => {
        dispatch(traerReceta())
    }, [dispatch])

const [recipesPerPage] = useState(9); //cuantas recetas x pagina
const indexOfLastRecipe = currentPage * recipesPerPage; //pagina x cantidad  recetas en pagina
const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
const currentRecipes = recetas.slice(indexOfFirstRecipe, indexOfLastRecipe); //agarra el indice de la primer y ultima receta

    return (
        <div>
            <div className={style.container}>
                {currentRecipes?.map((r, index) => (<RecipeCard
                    key = {`r.${index}`}
                    image = {r.image}
                    name = {r.name}
                    diets = {r.diets}
                    healthScore = {r.healthScore}
                    id = {r.id}
                    />))}
            </div>
                <div>
                 <Pagination recipesPerPage={recipesPerPage} recetas={recetas.length} currentPage={currentPage}/>
                </div>
        </div>
    )
}