import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { traerDietas } from '../../../redux/actions';
import style from "./FilterDiets.module.css";

export const FilterDiets = (props) => {

  const diets = useSelector((state) => state.dietas);
  const seleccionadas = useSelector((state) => state.seleccionadas);
  const dispatch = useDispatch();

  useEffect(() =>{
      if(!diets.length){
          dispatch(traerDietas())
        }
  }, [dispatch]);

  return (
    <div className={style.dietasContainer}>
        {diets?.map((diet) => {
            return (
            <div className={style.box} key={diet.name}>
                <input
                    className={style.checkBox}
                    type='checkbox'
                    id={diet.id}
                    checked={seleccionadas.includes(diet.name)}
                    value={diet.name}
                    name={diet.id}
                    onChange={(event) => props.handleChange2(event)}
                />
                <label htmlFor={diet.id} className={style.name}>
                    {diet.name}
                </label>
            </div>
            )
        })}
    </div>
  );
};