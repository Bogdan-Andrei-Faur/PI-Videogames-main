import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getGames } from "../../Redux/Actions/Actions";
import style from "./Home.module.css"
import Cards from "../Cards/Cards";

export default function Home (){
    const dispatch = useDispatch();

    const allGames = useSelector(state => state.allGames)
    const byName = useSelector(state => state.byName)

    let games = [];

    byName.length ? games = [...byName] : games = [...allGames];

    useEffect(() => {
        if(!games.length) dispatch(getGames())
    })

    return (
        <div className={style.content}>
            <Cards games={games}/>
        </div>
    )
}