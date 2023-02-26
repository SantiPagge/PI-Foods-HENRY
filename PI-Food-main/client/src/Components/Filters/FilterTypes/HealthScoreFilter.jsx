import React from "react";
import style from './HealthScoreFilter.module.css';

export const HealthScoreFilter = (props) => {
    return (
        <div className={style.box}>
            <select onChange={ element => props.filter(element)}>
                <option selected disabled>Health Score</option>
                <option value='max'>Max to min</option>
                <option value='min'>Min to max</option>
            </select>
        </div>
    )
}