import React from "react";
import style from './Nav2.module.css';
import { Link } from 'react-router-dom';
import { changePag } from "../../redux/actions";
import { useDispatch } from "react-redux";


export const Nav2 = () => {

    const dispatch = useDispatch()

    const handleHomeButton = () => {
        dispatch(changePag)
    }

    return (
        <nav className={style.nav}>
            <div>
                <Link to='/'><button className={style.exitButton}>Exit</button></Link>
                <Link to='/home'><button className={style.homeButton} onClick={handleHomeButton}>Home</button></Link>
            </div>
        </nav>
    )
}