import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getByName, cleanStateName } from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css"

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
        <div className={styles.background}>
            <Link to="/home">
                <button className={styles.homeButton} onClick={handleClick}>Home</button>
            </Link>
            
            <input
                className={styles.searchBar}
                type="search" 
                placeholder="Search games..."
                onChange={handleChange}
                value={input}
                onKeyDown={handleKeyPress}
            />

            <Link to="/home">
                <button className={styles.searchButton} ref={searchBtn} onClick={handleSearch}>Search</button>
            </Link>

            <Link to="/create">
                <button className={styles.createButton} onClick={handleClick}>Create Game</button>
            </Link>
        </div>
    )
}