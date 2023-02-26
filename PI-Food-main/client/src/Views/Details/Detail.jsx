import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { recetaId, vaciarId } from '../../redux/actions'
import style from './Detail.module.css'

export const Detail = (props) => {
    
    const noHaySteps = 'Esta receta no tiene pasos'
    const dispatch = useDispatch();
    const detailId = useSelector(state => state.recetaId);
    const { id } = useParams();
    console.log(props)

    const regresar = () => {
        dispatch(vaciarId())
        // history.push(`/home`)
    }

    useEffect(() => {
        if(!detailId.length && id){
        const timerId = setTimeout(() => {
          dispatch(recetaId(id))
          if(id === 'undefined') console.log('cargando id')
        }, 3000)
      
        return () => clearTimeout(timerId)}
      }, [dispatch])

    return (
        <div className={style.detailContainer}>
            <div>
                <div>
                    {/* <h3>Id: {detailId.id}</h3> */}
                    <img src={detailId?.image} alt='Recipe'/>
                    <h2>Name: {detailId?.name}</h2>
                    <h3>Steps: {detailId?.steps ? detailId.steps : noHaySteps}</h3>
                    <h4>Diets: {detailId?.diets?.map((diet) => diet)}</h4>
                    <h4>HealthScore: {detailId?.healthScore}</h4>
                    <h4>Summary: {detailId?.summary}</h4>
                    <h4>DishTypes: {detailId?.dishTypes?.map((dishT) => dishT)}</h4>
                    <button>
                        <Link to='/home' onClick={() => regresar()} className={style.homeLink}>Home</Link>
                    </button>
                </div>
            </div>
        </div>
    )

}