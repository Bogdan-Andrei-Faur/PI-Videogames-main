import React from "react";
import style from "./Card.module.css"

export default function Card ({image, name, genres, platforms}){
    return (
        <div className={style.div}>
            <img className={style.img} src={image} alt={name} />
            <h2 className={style.name}>{name}</h2>
            <h3 className={style.genre}>{genres}</h3>
            <h3 className={style.platforms}>{platforms}</h3>
        </div>
    )
}