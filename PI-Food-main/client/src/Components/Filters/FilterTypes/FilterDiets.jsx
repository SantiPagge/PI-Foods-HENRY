import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions';
import style from './FilterDiets.module.css';

export const FilterDiets = (props) => {

const diets = useSelector((state) => state.dietas);
const seleccionadas = useSelector((state) => state.seleccionadas);

const dispatch = useDispatch();

useEffect(() =>{
    if(!diets.length){
        dispatch(actions.traerDietas())
    }
}, [dispatch]);

return (
    <div>
        {diets?.map((diet) => {
            return (
                <div key={diet.name}>
                    <input
                    className={style.checkBox}
                    type='checkbox'
                    id={diet.id}
                    checked={seleccionadas.includes(diet.name)}
                    value={diet.name}
                    name={diet.id}
                    onChange={(event) => props.handleChange2(event)}/>
                    <label htmlFor={diet.id} className={style.name}>
                        {diet.name}
                    </label>
                </div>
            )
        })}
    </div>
    )
};