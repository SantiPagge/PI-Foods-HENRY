import React from "react";
import style from './RecipeCard.module.css';


export const RecipeCard = ({ image }) => {
    return (
        <div classname={style.card}>
            <img src={image}/>
        </div>
    )
}