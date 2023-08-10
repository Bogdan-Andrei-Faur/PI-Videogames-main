import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { order } from "../../Redux/Actions/Actions";

export default function Filters (){
    const dispatch = useDispatch();
    const orderState = useSelector(state => state.order)

    const handleOrder = event => {
        dispatch(order(event.target.value));
    }

    return (
        <div>
            <select value= {orderState} onChange={handleOrder}>
                <option value= ''>Order</option>
                <option value= 'asc'>A - Z</option>
                <option value= 'desc'>Z - A</option>
                <option value= 'rating desc'>Best Rating</option>
                <option value= 'rating asc'>Worst Rating</option>
            </select>
        </div>
    )
}