import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loader } from "../../Components/Loader/Loader";
import { recetaId, vaciarId } from '../../redux/actions'
import style from './Detail.module.css'

export const Detail = (props) => {
    
    const noHaySteps = `This recipe don't have steps.`
    const dispatch = useDispatch();
    const detailId = useSelector(state => state.recetaId);
    const { id } = useParams();
    console.log(props)

    const regresar = () => {
        dispatch(vaciarId())
    }

    useEffect(() => {
        if(!detailId.length && id){
        const timerId = setTimeout(() => {
          dispatch(recetaId(id))
          if(id === 'undefined') console.log('cargando id')
        }, 3000)
      
        return () => clearTimeout(timerId)}
      }, [dispatch])

if (detailId.id){
    return (
        <div className={style.fullContainer}>
            <div>
                <div className={style.detailContainer}>
                    <img src={detailId?.image} alt='RecipeImg' className={style.detailImage}/>
                        <div className={style.right}>
                            <h5 className={style.id}>Id: {detailId.id}</h5>
                            <h2 className={style.name}>Name: </h2>
                            <h3 className={style.detailName}>{detailId?.name}</h3>
                            <h3 className={style.diets}>Diets: </h3>
                            <h4 className={style.detailDiets}>{detailId?.diets?.map((diet) => diet).join(', ')}</h4>
                            <h4 className={style.dishtypes}>DishTypes: </h4>
                            <h4 className={style.detailDishtypes}>{detailId?.dishTypes?.map((dishT) => dishT).join(', ')}</h4>
                            <h4 className={style.healthScore}>HealthScore: {detailId?.healthScore}</h4>
                            <Link to='/home' onClick={() => regresar()}>
                                <button className={style.button}>Back</button>
                            </Link>
                        </div>
                </div>
                        <div className={style.bottomContainer}>
                            <h2 className={style.summary}>Summary: </h2>
                            <h4 className={style.detailSummary}>{detailId?.summary}</h4> 
                            <h2 className={style.steps}>Steps: </h2>
                            <h4 className={style.detailSteps}>{detailId?.steps ? detailId.steps : noHaySteps}</h4>
                        </div>
            </div>
        </div>
    )
    } else {
        return (
            <div>
               <Loader/>
            </div>
        )
    }
}

