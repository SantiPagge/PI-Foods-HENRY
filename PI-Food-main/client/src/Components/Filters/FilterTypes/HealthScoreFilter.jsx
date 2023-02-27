import React from "react";
import {filtroScoreH, changePag} from '../../../redux/actions';
import { useDispatch } from "react-redux";
import style from "./HealthScoreFilter.module.css";


export const HealthScoreFilter = () => {

    const dispatch = useDispatch()


    const filter = (event) =>{
        event.preventDefault()
        dispatch(filtroScoreH(event.target.value))
        dispatch(changePag(1))
    }

    return(

        <div className={style.box}>
<select className='classic' onChange={element => filter(element)}>
<option value="">Health Score</option>
    <option value ="max">Max-Min</option>
    <option value ="min">Min-Max</option>

</select>
        </div>
    )
}