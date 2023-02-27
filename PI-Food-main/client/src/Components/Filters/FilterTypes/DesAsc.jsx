import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByName } from "../../../redux/actions";
import style from "./DesAsc.module.css";

export const DesAsc = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSort = (event) => {
    event.preventDefault();
    dispatch(sortByName(event.target.value));
    setValue(event.target.value);
  };


  return (
    <div className={style.box}>
      <select className={style.classic} onChange={handleSort} value={value}>
        <option value="">Alfabetic</option>
        <option value="Asc">A-Z</option>
        <option value="Des">Z-A</option>
      </select>
    </div>
  );
};