import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { recetaId } from '../../redux/actions'
import style from './Detail.module.css'

export const Detail = () => {
    
    const dispatch = useDispatch();
    const detailId = useSelector(state => state.recetaId);
    const { id } = useParams();
    
    useEffect(() => {
        dispatch(recetaId(id))
    }, [])
    
    console.log(detailId)
    return (
        <div className={style.detailContainer}>
            <div>
                <div>
                    <button>
                        <Link to='/home' className={style.homeLink}>Home</Link>
                    </button>
                    
                </div>
            </div>
        </div>
    )

}