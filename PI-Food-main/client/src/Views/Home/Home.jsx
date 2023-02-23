import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { RecipeCard } from "../../Components/Recipes/RecipeCard";
import style from './Home.module.css';
import { traerReceta } from "../../redux/actions";

export const Home = () => {

    const dispatch = useDispatch();
    const recetas = useSelector(state => state.recetas);
    console.log(recetas);

    useEffect(() => {
        dispatch(traerReceta())
    }, [])

    return (
       <div className={style.container}>
        {recetas.length >= 1 && recetas.map((r, index) => (<RecipeCard
            key = {`r.${index}`}
            image = {r.image}
            name = {r.name}
            diets = {r.diets}
            healthScore = {r.healthScore}
            // id = {r.id}
            // summary = {r.summary}
            // dishTypes = {r.dishTypes}
            // steps = {r.steps}
        />))}
       </div>
    )
}