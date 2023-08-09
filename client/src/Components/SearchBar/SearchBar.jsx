import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName, cleanStateName } from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom"; 

export default function SearchBar (){
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSearch = () => {
        if (input){
            dispatch(getByName(input));
        }
    }

    const handleClick = () => {
        dispatch(cleanStateName([]));
    }

    return (
        <div>
            <Link to="/home">
                <button onClick={handleClick}>Home</button>
            </Link>
            <input 
                type="text" 
                placeholder="Buscar..."
                onChange={handleChange}
                value={input}
            />
            <button onClick={handleSearch}/>
        </div>
    )
}