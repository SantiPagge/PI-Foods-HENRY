import React from "react";
import { Link } from 'react-router-dom';
import style from './Welcome.module.css'
import foods from '../../assets/foods.mp4'

export const Welcome = () => {

    return (
        <div className={style.main}>
            <video src={foods} autoPlay loop muted/>
            <div className={style.overlay}/>
            <div className={style.centrar}>
                <section className={style.cuadrado}>
                        <h1 className={style.title}> HENRY FOOD </h1>
                    <div className={style.spanWelcome}>
                        <span> Welcome to the Henry's Food Market </span>
                    </div>
                    <Link to='home'><button className={style.welcomeButton}>Lets Cook!</button></Link>
                </section>
            </div>
        </div>
    )

}