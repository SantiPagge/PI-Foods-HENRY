import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
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

    }, [])

const [charactersPerPage, setCharactersPerPage] = useState(9); //cuantas recetas x pagina
const indexOfLastCharacter = currentPage * charactersPerPage; //pagina x cantidad  recetas en pagina
const indexOfFirsChararacter = indexOfLastCharacter - charactersPerPage;
const currentCharacters = recetas.slice(indexOfFirsChararacter, indexOfLastCharacter); //agarra el indice del primero y del ultimo pj

    return (
        <div>
            <div className={style.container}>
                {currentCharacters?.map((r, index) => (<RecipeCard
                    key = {`r.${index}`}
                    image = {r.image}
                    name = {r.name}
                    diets = {r.diets}
                    healthScore = {r.healthScore}
                    id = {r.id}
                    // summary = {r.summary}
                    // dishTypes = {r.dishTypes}
                    // steps = {r.steps}
                />))}
            </div>
                <div>
                 <Pagination charactersPerPage={charactersPerPage} recetas={recetas.length} currentPage={currentPage}/>
                </div>
        </div>
    )
}