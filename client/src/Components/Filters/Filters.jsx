import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { order, genresFilter, originFilter } from "../../Redux/Actions/Actions";

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
        <div>
            <select value= {orderState} onChange={handleOrder}>
                <option value= "">Order</option>
                <option value= "asc">A - Z</option>
                <option value= "desc">Z - A</option>
                <option value= "rating desc">Best Rating</option>
                <option value= "rating asc">Worst Rating</option>
            </select>
            <select value={genresFilterState} onChange={handleGenreFilter}>
                <option value="">Genres</option>
                {
                    genres?.map(genre => (
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    ))
                }
            </select>
            <select value={originFilterState} onChange={handleOriginFilter}>
                <option value="">Origin</option>
                <option value= 'created'>Created</option>
                <option value= 'existing'>Existing</option>
            </select>
        </div>
    )
}