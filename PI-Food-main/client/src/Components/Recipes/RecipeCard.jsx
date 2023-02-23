import React from "react";
import style from './RecipeCard.module.css';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { recetaId } from "../../redux/actions";


export const RecipeCard = ({ id, name, healthScore, image, diets }) => {
    const dispatch = useDispatch();
    const recetaid = useSelector(state => state.recetaid);

    useEffect(() => {
        dispatch(recetaId())
    }, [])
   
    return (
        <Link to={`/detail/${id}`}>
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
        </Link>
    )
}