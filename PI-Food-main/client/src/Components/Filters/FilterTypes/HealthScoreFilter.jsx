import React from "react";
import { useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import style from './HealthScoreFilter.module.css';


export const HealthScoreFilter = () => {

    const dispatch = useDispatch()

    const filter = (event) => {
        event.preventDefault()
        dispatch(actions.filtroScoreH(event.target.value))
        dispatch(actions.changePag(1))
    }

    return (
        <div className={style.box}>
            <select onChange={ element => filter(element)}>
                <option value='HealthScore'>Health Score</option>
                <option value='max'>Max to min</option>
                <option value='min'>Min to max</option>
            </select>
        </div>
    )
}