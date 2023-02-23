import React from "react";
import * as actions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import "./pagination.module.css"

export const Pagination = (props) => {
 const {charactersPerPage, recetas } = props
 const dispatch = useDispatch()

const recetas2 = useSelector(state => state.recetas)

 const currentPage = useSelector(state => state.currentPage)
    let pages = [];
    for (let i = 1; i <= Math.ceil(recetas / charactersPerPage); i++) {
        pages.push(i);
 }



    return (
        <div className='pagination'>
            { currentPage !== 1 && recetas2.length >= charactersPerPage ? 
    <><button onClick={() => dispatch(actions.cambiarPagina(currentPage - 1))}>{"<"}</button><button onClick={() => dispatch(actions.cambiarPagina(currentPage - 1))}>{currentPage - 1}</button></>
 :     <><button disable>{"<"}</button></>
}

         <button  className="active">{currentPage}</button>

         { currentPage !== pages[pages.length-1] && recetas2.length >= charactersPerPage ? (
        <><button onClick={() => dispatch(actions.cambiarPagina(currentPage + 1))}>{currentPage + 1}</button><button onClick={() => dispatch(actions.cambiarPagina(currentPage + 1))}>
                    {">"}
                </button></>
  ) : (

    <><button disable>||</button></>
  )
}
        </div>
    );
};