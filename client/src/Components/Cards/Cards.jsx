import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({games}){
    return (
        <div className={style.position}>
            {
                games?.map(({id, image, name, genres}) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            image={image}
                            name={name}
                            genres={genres}
                        />
                    )
                })
            }
        </div>
    )
}