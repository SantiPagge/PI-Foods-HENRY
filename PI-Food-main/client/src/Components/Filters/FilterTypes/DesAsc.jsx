import React from "react";
import style from './DesAsc.module.css';

export const DesAsc = (props) => {
    return (
        <div className={style.desAscBox}>
            <select onChange={ element => props.handleSort(element)}>
                <option value='Alfabetic'>Alfabetic</option>
                    <option value='Ascendent'>Ascendent</option>
                    <option value='Descendent'>Descendent</option>
            </select>
        </div>
    )
}