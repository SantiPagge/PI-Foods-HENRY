import React from "react";
import style from './Loading.module.css';

export const Loading = () => {
    return (
        <div className={style.loader}>
            <div className={style.circle}/>
        </div>
    )
}