import React from "react";
import style from './RecipeCard.module.css';


export const RecipeCard = ({ id, name, summary, healthScore, image, dishTypes, diets, steps }) => {
    return (
        <div className={style.card}>
            {/* <h3>{id}</h3> */}
            <img className={style.image} src={image} alt='Image'/>
            <h3  className={style.name}>{name}</h3>
            {/* <h3  className={style.summary} >{summary}</h3> */}
            <h3 className={style.diets}>{diets}</h3>
            <h3 className={style.healthScore}>{healthScore}</h3>
            {/* <h3 className={style.dishTypes}>{dishTypes}</h3> */}
            {/* <h3 className={style.steps}>{steps}</h3> */}
        </div>
    )
}