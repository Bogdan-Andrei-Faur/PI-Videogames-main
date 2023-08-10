import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { getGenres, genresFilter, originFilter, nameOrder, alfaOrder, ratingOrder } from "../../Redux/Actions/Actions";

export default function Filters (){
    const dispatch = useDispatch();
    const genresState = useSelector(state => state.genres);
    const genresFilterState = useSelector(state => state.genresFilter)
    // const originFilterState = useSelector(state => state.originFilter)
    // const nameOrderState = useSelector(state => state.nameOrder)
    // const alfaOrderState = useSelector(state => state.alfaOrder)
    // const ratingOrderState = useSelector(state => state.ratingOrder)

    const handleGenresFilter = event => {
        dispatch(getGenres());
        dispatch(genresFilter(event.target.value));
    }

    // const handleOriginFilter = event => {
    //     dispatch(originFilter(event.target.value));
    // }

    // const handleNameOrder = event => {
    //     dispatch(nameOrder(event.target.value));
    // }

    // const handleAlfaOrder = event => {
    //     dispatch(alfaOrder(event.target.value));
    // }

    // const handleRatingOrder = event => {
    //     dispatch(ratingOrder(event.target.value));
    // }

    return (
        <div>
            <h5>Filter: </h5>
            <select value={genresFilterState} onChange={handleGenresFilter}>
                <option value="all">All Genres</option>
                {
                    genresState?.map(genre => (
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    ))
                }
            </select>
        </div>
    )
}