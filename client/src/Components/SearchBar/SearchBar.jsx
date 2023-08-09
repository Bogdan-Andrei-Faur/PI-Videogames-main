import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getByName, cleanStateName } from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom"; 

export default function SearchBar (){
    const searchBtn = useRef(null);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSearch = () => {
        setInput("")
        if (input){
            dispatch(getByName(input));
        }
    }

    const handleClick = () => {
        dispatch(cleanStateName([]));
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchBtn.current.click();
        }
    }

    return (
        <div>
            <Link to="/home">
                <button onClick={handleClick}>Home</button>
            </Link>
            <input 
                type="search" 
                placeholder="Buscar..."
                onChange={handleChange}
                value={input}
                onKeyDown={handleKeyPress}
            />
            <Link to="/home">
                <button ref={searchBtn} onClick={handleSearch}>Search</button>
            </Link>
        </div>
    )
}