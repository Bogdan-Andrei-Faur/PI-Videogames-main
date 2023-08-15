import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Home.module.css"
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import { getGames, getGenres, setPage } from "../../Redux/Actions/Actions";
import { nameASC, nameDES, ratingASC, ratingDESC } from "../../Helpers/sort";

export default function Home (){
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const byName = useSelector(state => state.byName);
    const orderState = useSelector(state => state.order);
    const genresFilter = useSelector(state => state.genresFilter);
    const originFilterState = useSelector(state => state.originFilter);
    const currentPage = useSelector((state) => state.currentPage);
    
    let games = [];

    byName.length ? games = [...byName] : games = [...allGames];

    if(orderState === "asc" ) games.sort(nameASC);
    if(orderState === "desc") games.sort(nameDES);
    if(orderState === "rating desc") games.sort(ratingDESC);
    if(orderState === "rating asc") games.sort(ratingASC);

    if(genresFilter.length !== 0 && genresFilter !== "") games = games.filter(g => g.genres.map(gen => gen.name).includes(genresFilter));

    if(originFilterState === 'created') games = games.filter(genre => typeof genre.id === 'string');
    if(originFilterState === 'existing') games = games.filter(genre => typeof genre.id === 'number');

    const gamesPerPage = 15;
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;

    const currentGames = games.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
    };
    
    const totalPages = Math.ceil(games.length / gamesPerPage);
    const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
        <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
            disabled={currentPage === index + 1}
        >
            {index + 1}
        </button>
    ));

    useEffect(() => {
        if(!games.length) dispatch(getGames())
        if(!genres.length) dispatch(getGenres())
    })

    return (
        <div className={styles.home}>
            <Filters/>
            
            <Cards games={currentGames}/>

            <div className={styles.pagination}>
                {paginationButtons}
            </div>
        </div>
    )
}