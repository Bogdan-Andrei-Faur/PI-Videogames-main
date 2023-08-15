import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card ({id, image, name, genres}){
    return (
        <div className={styles.background}>

            <Link to={`/detail/${id}`}>
                <img className={styles.img} src={image} alt={name} />
            </Link>
            
            <h2 className={styles.name}>{name}</h2>

            <h3 className={styles.genre}>{genres.map(gen => gen.name).join(" | ")}</h3>
            
        </div>
    )
}