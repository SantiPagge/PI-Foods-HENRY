import React, { useState } from "react";
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
import { SearchBar } from '../Filters/FilterTypes/SearchBar'
import { setSearch } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Nav = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    const handleHomeButton = () => {
        setCurrentPage(1)
    }

    const handleChange =(event) => { 
    event.preventDefault() 
    dispatch(setSearch(event.target.value))
}

    return (
        <nav className={style.nav}>
            <div>
                <div className={style.searchBar}>
                <SearchBar handleChange={handleChange}/>
                </div>
                <Link to='/'><button className={style.exitButton}>Exit</button></Link>
                <Link to='/home'><button className={style.homeButton} onClick={handleHomeButton}>Home</button></Link>
                <Link to='/create'><button className={style.createRecipeButton}>Create Recipe</button></Link>
            </div>
        </nav>
    )
}