import React, { useState } from "react";
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

export const Nav = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const handleHomeButton = () => {
        setCurrentPage(1)
    }

    return (
        <nav className={style.nav}>
            <div>
                <Link to='/'><button className={style.exitButton}>Exit</button></Link>
                <Link to='/home'><button className={style.homeButton} onClick={handleHomeButton}>Home</button></Link>
                <Link to='/create'><button className={style.createRecipeButton}>Create Recipe</button></Link>
            </div>
        </nav>
    )
}