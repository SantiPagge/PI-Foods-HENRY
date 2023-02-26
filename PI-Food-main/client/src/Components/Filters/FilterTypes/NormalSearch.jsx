import React from "react";
import { useSelector } from "react-redux";
import style from './NormalSearch.module.css';

export const NormalSearch = (props) => {

    const search = useSelector(state => state.search)

    return (
        <div>
            <hr></hr>
            <input className={style.search}
            placeholder='Search your recipe.'
            type='text'
            onChange={props.handleChange}
            value={search}/>
            <hr></hr>
        </div>
    );
};