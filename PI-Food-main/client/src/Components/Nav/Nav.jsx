import React from "react";
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.buttons}>
                <Link to='/'><button className={style.exitButton}>Exit</button></Link>
                <Link to='/home'><button className={style.homeButton}>Home</button></Link>
                <Link to='/create'><button className={style.createRecipeButton}>Create Recipe</button></Link>
            </div>
        </nav>
    )
}