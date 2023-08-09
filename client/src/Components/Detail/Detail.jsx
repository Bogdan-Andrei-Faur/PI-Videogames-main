import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanGameDetail, getById } from "../../Redux/Actions/Actions";
import style from "./Detail.module.css"

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
        <div className={style.div}>
            <img className={style.img} src={gameDetail.image} alt={gameDetail.name} />
            <h1>{gameDetail?.name}</h1>
            <h2>{gameDetail?.genres}</h2>
            <h2>{gameDetail?.platforms}</h2>
            <h2>{gameDetail?.release}</h2>
            <h2>{gameDetail?.rating}</h2>
        </div>
    )
}