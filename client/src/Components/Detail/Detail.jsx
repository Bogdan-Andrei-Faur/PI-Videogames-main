import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanGameDetail, getById } from "../../Redux/Actions/Actions.js";
import styles from "./Detail.module.css";

export default function Detail (){
    const {id} = useParams();
    const dispatch = useDispatch();
    const gameDetail = useSelector(state => state.gameDetail);

    useEffect(() => {
        dispatch(getById(id))
        return () => {
            dispatch(cleanGameDetail({}))
        }
    }, [dispatch, id])

    return (
        <div className={styles.wall}>
            <div className={styles.background}>
                <h1 className={styles.id}>{gameDetail.id}</h1>
                <img className={styles.image} src={gameDetail.image} alt={gameDetail.name} />
                <h1 className={styles.name}>{gameDetail.name}</h1>
                <h2 className={styles.genres}>{gameDetail.genres?.map(gen => gen.name).join(" | ")}</h2>
                <h3 className={styles.platforms}>{gameDetail.platforms?.join(" | ")}</h3>
                <div className={styles.description}>
                {gameDetail.description && gameDetail.description
                    .replace(/<p>/g, ' ')
                    .replace(/<\/p>/g, ' ')
                    .replace(/<br \/>/g, ' ')}
                </div>
                
                <h4 className={styles.release}>{"Release: " + gameDetail.release}</h4>
                <h4 className={styles.rating}>{"Rating: " + gameDetail.rating}</h4>
            </div>
        </div>
    )
}