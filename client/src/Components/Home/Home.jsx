import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./Home.module.css"
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import { getGames } from "../../Redux/Actions/Actions";
import { nameASC, nameDES, ratingASC, ratingDESC } from "../../Helpers/sort";

export default function Home (){
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames)
    const byName = useSelector(state => state.byName)
    const orderState = useSelector(state => state.order)
    
    let games = [];

    byName.length ? games = [...byName] : games = [...allGames];

    if(orderState === 'asc' ) games.sort(nameASC);
    if(orderState === 'desc') games.sort(nameDES);
    if(orderState === "rating desc") games.sort(ratingDESC);
    if(orderState === 'rating asc') games.sort(ratingASC);

    useEffect(() => {
        if(!games.length) dispatch(getGames())
    })

    return (
        <div className={style.content}>
            <Filters/>
            <Cards games={games}/>
        </div>
    )
}