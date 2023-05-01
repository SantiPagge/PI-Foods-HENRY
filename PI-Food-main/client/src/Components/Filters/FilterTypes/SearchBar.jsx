import React from "react";
import style from "./SearchBar.module.css"
import { useSelector } from "react-redux";


export const SearchBar = (props) =>{
  
  const search = useSelector(state => state.search)


return (
    <div>
      <input className={style.search}
        placeholder="Search recipes."  
        type="text"
        onChange={props.handleChange}
        value={search}/>
    </div>
  );
};