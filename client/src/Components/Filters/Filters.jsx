import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { order, genresFilter, originFilter } from "../../Redux/Actions/Actions.js";
import styles from "./Filters.module.css";

export default function Filters (){
    const dispatch = useDispatch();
    const orderState = useSelector(state => state.order);
    const genres = useSelector(state => state.genres);
    const genresFilterState = useSelector(state => state.genresFilter);
    const originFilterState = useSelector(state => state.originFilter);

    const handleOrder = event => {
        dispatch(order(event.target.value));
    }

    const handleGenreFilter = event => {
        dispatch(genresFilter(event.target.value));       
    }

    const handleOriginFilter = event => {
        dispatch(originFilter(event.target.value));        
    }

    return (
        <div className={styles.background}>
            <select className={styles.order} value= {orderState} onChange={handleOrder}>
                <option value= "">Order</option>
                <option value= "asc">A - Z</option>
                <option value= "desc">Z - A</option>
                <option value= "rating desc">Best Rating</option>
                <option value= "rating asc">Worst Rating</option>
            </select>

            <select className={styles.genres} value={genresFilterState} onChange={handleGenreFilter}>
                <option value="">Genres</option>
                {
                    genres?.map(genre => (
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    ))
                }
            </select>

            <select className={styles.origin} value={originFilterState} onChange={handleOriginFilter}>
                <option value="">Origin</option>
                <option value= 'created'>Created</option>
                <option value= 'existing'>Existing</option>
            </select>
        </div>
    )
}