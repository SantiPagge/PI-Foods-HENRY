import React from "react";
import style from './RecipeCard.module.css';
import { Link } from 'react-router-dom'

export const RecipeCard = ({ id, name, healthScore, image, diets }) => {

    return (
        <Link to = {`/detail/${id}`} className={style.link}>
            <div className={style.container}>
                <div className={style.card}>
                    <img className={style.image} src={image} alt='not found'/>
                    <h3  className={style.name}>{name}</h3>
                    <h3 className={style.diets}>Diets: {diets.join(', ')}</h3>
                    <h3 className={style.healthScore}>HealthScore: {healthScore}</h3>
                </div>
            </div>
        </Link>
    )
}