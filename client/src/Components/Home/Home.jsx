import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import style from "./Home.module.css"
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import { getGames, getGenres } from "../../Redux/Actions/Actions";
import { nameASC, nameDES, ratingASC, ratingDESC } from "../../Helpers/sort";

export default function Home (){
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const byName = useSelector(state => state.byName);
    const orderState = useSelector(state => state.order);
    const genresFilter = useSelector(state => state.genresFilter);
    const originFilterState = useSelector(state => state.originFilter);
    
    let games = [];

    byName.length ? games = [...byName] : games = [...allGames];

    if(orderState === "asc" ) games.sort(nameASC);
    if(orderState === "desc") games.sort(nameDES);
    if(orderState === "rating desc") games.sort(ratingDESC);
    if(orderState === "rating asc") games.sort(ratingASC);

    if(genresFilter.length !== 0 && genresFilter !== "") games = games.filter(g => g.genres.includes(genresFilter));
    if(originFilterState === 'created') games = games.filter(genre => typeof genre.id === 'string');
    if(originFilterState === 'existing') games = games.filter(genre => typeof genre.id === 'number');   

    useEffect(() => {
        if(!games.length) dispatch(getGames())
        if(!genres.length) dispatch(getGenres())
    })

    return (
        <div className={style.content}>
            <Filters/>
            <Cards games={games}/>
        </div>
    )
}