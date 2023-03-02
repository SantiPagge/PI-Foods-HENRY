import React from "react";
import style from './pagination.module.css'
import { changePag } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export const Pagination = (props) => {
 const { recipesPerPage, recetas } = props
 const dispatch = useDispatch()

const recetas2 = useSelector(state => state.recetas)

const currentPage = useSelector(state => state.currentPage)
  let pages = [];
  for (let i = 1; i <= Math.ceil(recetas / recipesPerPage); i++) {
      pages.push(i);
 }

  return (
    <div className={style.pagination}>
    { currentPage !== 1 && recetas2.length >= recipesPerPage ? 
      <><button onClick={() => dispatch(changePag(currentPage - 1))}>{"<"}</button><button onClick={() => dispatch(changePag(currentPage - 1))}>{currentPage - 1}</button></>
    : <><button disable>{"<"}</button></> 
    } 
    <button  className={style.active}>{currentPage}</button>
    { currentPage !== pages[pages.length-1] && recetas2.length >= recipesPerPage ? (
      <><button onClick={() => dispatch(changePag(currentPage + 1))}>{currentPage + 1}</button><button onClick={() => dispatch(changePag(currentPage + 1))}>
      {">"}</button></>
    ) 
    : (
        <><button disable>||</button></>
      )
    }
    </div>
  );
};