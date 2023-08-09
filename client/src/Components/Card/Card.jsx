import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card ({id, image, name, genres}){
    return (
        <div className={style.div}>
            <Link to={`/detail/${id}`}>
                <img className={style.img} src={image} alt={name} />
            </Link>
            
            <h2 className={style.name}>{name}</h2>
            <h3 className={style.genre}>{genres}</h3>
        </div>
    )
}