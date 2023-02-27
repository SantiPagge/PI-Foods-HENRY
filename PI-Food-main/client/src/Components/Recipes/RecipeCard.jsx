import React from "react";
import style from './RecipeCard.module.css';
import { Link } from 'react-router-dom'
// import { useDispatch } from "react-redux";

export const RecipeCard = ({ id, name, healthScore, image, diets }) => {
    // const dispatch = useDispatch();

    return (
        <Link to = {`/detail/${id}`}>
            <div className={style.card}>
                {/* <h3>{id}</h3> */}
                <img className={style.image} src={image} alt='not found'/>
                <h3  className={style.name}>{name}</h3>
                {/* <h3  className={style.summary} >{summary}</h3> */}
                <h3 className={style.diets}>Diets: {diets.join(' ')}</h3>
                <h3 className={style.healthScore}>HealthScore: {healthScore}</h3>
                {/* <h3 className={style.dishTypes}>{dishTypes}</h3> */}
                {/* <h3 className={style.steps}>{steps}</h3> */}
                {/* <button onClick={() => history.push(`/detail/${id}`, id)}>Boton</button> */}
            </div>
        </Link>
    )
}