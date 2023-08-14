import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres, postGame } from "../../Redux/Actions/Actions";
import { formControl } from "../../Helpers/formControl"
import { useNavigate } from "react-router-dom";

export default function Form (){
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames)
    const genres = useSelector(state => state.genres)
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        description: "",
        genres: [],
        platforms: [],
        image: "",
        release: "",
        rating: ""
    })

    if(!allGames.length && !genres.length) {
        dispatch(getGames());
        dispatch(getGenres());
    }

    const handleChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setError(formControl({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    const handleSelectGenre = event => {
        setInput({
            ...input,
            genres: [...input.genres, event.target.value],
        })
        setError(formControl({
            ...input,
            genres: [...input.genres, event.target.value],
        }))
      };
    
    const handleSelectPlatform = event => {
        setInput({
            ...input,
            platforms: [...input.platforms, event.target.value],
        })
        setError(formControl({
            ...input,
            platforms: [...input.platforms, event.target.value],
        }))
      };
    
    const deleteChoice = (category, value) => {
        const newValues = input[category].filter((event) => event !== value);
        setInput({
        ...input,
        [category]: newValues
      })
      setError(formControl({
        ...input,
        [category]: newValues
      }))
    };
    
    const handleSubmit = () => {
        const numberInput = {
            ...input,
            rating: Number(input.rating)
        }
        dispatch(postGame(numberInput))
        dispatch(getGames());
        navigate("/home");
    };
    

    const disabled = Object.keys(error).length || !input.name

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Image:</h3>
                    <input
                        type="text"
                        placeholder="Url..."
                        name="image"
                        value={input.image}
                        onChange={handleChange}
                    />
                </div>
                {error.image && <span>》》 {error.image}</span>}

                <div>
                    <h3>Name:</h3>
                    <input 
                        type="text"
                        name="name"
                        value={input.name}
                        placeholder="Name..."
                        onChange={handleChange}
                    />
                </div>
                {error.name && <span>》》 {error.name}</span>}

                <div>
                    <h3>Description:</h3>
                    <textarea
                        type="text"
                        name="description"
                        cols="30"
                        rows="10"
                        value={input.description}
                        placeholder="Description..."
                        onChange={handleChange}
                    />
                </div>
                {error.description && <span>》》 {error.description}</span>}

                <div>
                    <h3>Genres:</h3>
                    <select
                        name="genres"
                        value={input.genres}
                        defaultValue="Select"
                        onChange={event => handleSelectGenre(event)}
                    >
                        <option value="" disabled>Genres</option>
                        {
                            genres?.map(genre => (
                                <option key={genre.id} value={genre.name}>{genre.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    {// eslint-disable-next-line
                        input.genres.map((genre, i) => {
                            if (i < 7) 
                                return (
                                    <div key={i}>
                                        <div>
                                            <span>{genre}</span>
                                        </div>
                                    
                                        <button
                                            type="button"
                                            onClick={() => deleteChoice("genres", genre)}
                                        >X</button>
                                    </div>
                                )
                        })
                    }
                </div>
                {error.genres && <span> 》》 {error.genres}</span>}
            
                <div>
                    <h3>Platforms:</h3>
                    <select
                        name="platforms"
                        value={input.platforms}
                        defaultValue="Select"
                        onChange={event => handleSelectPlatform(event)}
                    >
                        <option value="" disabled>Platforms</option>
                        <option value="PC">PC</option>
                        <option value="PlayStation 5">PlayStation 5</option>
                        <option value="Xbox One">Xbox One</option>
                        <option value="PlayStation 4">PlayStation 4</option>
                        <option value="Xbox Series S/X">Xbox Series S/X</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                        <option value="iOS">iOS</option>
                        <option value="Android">Android</option>
                        <option value="Nintendo 3DS">Nintendo 3DS</option>
                        <option value="Nintendo DS">Nintendo DS</option>
                        <option value="Nintendo DSi">Nintendo DSi</option>
                        <option value="macOS">macOS</option>
                        <option value="Linux">Linux</option>
                        <option value="Xbox 360">Xbox 360</option>
                        <option value="Xbox">Xbox</option>
                        <option value="PlayStation 3">PlayStation 3</option>
                        <option value="PlayStation 2">PlayStation 2</option>
                        <option value="PlayStation">PlayStation</option>
                        <option value="PS Vita">PS Vita</option>
                        <option value="PSP">PSP</option>
                        <option value="Wii U">Wii U</option>
                        <option value="Wii">Wii</option>
                        <option value="GameCube">GameCube</option>
                        <option value="Nintendo 64">Nintendo 64</option>
                        <option value="Game Boy Advance">Game Boy Advance</option>
                        <option value="Game Boy Color">Game Boy Color</option>
                        <option value="Game Boy">Game Boy</option>
                        <option value="SNES">SNES</option>
                        <option value="NES">NES</option>
                        <option value="Classic Macintosh">Classic Macintosh</option>
                        <option value="Apple II">Apple II</option>
                        <option value="Commodore / Amiga">Commodore / Amiga</option>
                        <option value="Atari 7800">Atari 7800</option>
                        <option value="Atari 5200">Atari 5200</option>
                        <option value="Atari 2600">Atari 2600</option>
                        <option value="Atari Flashback">Atari Flashback</option>
                        <option value="Atari 8-bit">Atari 8-bit</option>
                        <option value="Atari ST">Atari ST</option>
                        <option value="Atari Lynx">Atari Lynx</option>
                        <option value="Atari XEGS">Atari XEGS</option>
                        <option value="Genesis">Genesis</option>
                        <option value="SEGA Saturn">SEGA Saturn</option>
                        <option value="SEGA CD">SEGA CD</option>
                        <option value="SEGA 32X">SEGA 32X</option>
                        <option value="SEGA Master System">SEGA Master System</option>
                        <option value="Dreamcast">Dreamcast</option>
                        <option value="3DO">3DO</option>
                        <option value="Jaguar">Jaguar</option>
                        <option value="Game Gear">Game Gear</option>
                        <option value="Neo Geo">Neo Geo</option>
                        <option value="Web">Web</option>
                    </select>
                </div>

                <div>
                    {// eslint-disable-next-line
                        input.platforms.map((platform, i) => {
                            if (i < 7) 
                                return (
                                    <div key={i}>
                                        <div>
                                            <span>{platform}</span>
                                        </div>
                                    
                                        <button
                                            type="button"
                                            onClick={() => deleteChoice("platforms", platform)}
                                        >X</button>
                                    </div>
                                )
                        })
                    }
                </div>
                {error.platforms && <span> 》》 {error.platforms}</span>}

                <div>
                <h3>Release:</h3>
                    <input 
                        type="date"
                        name="release"
                        value={input.release}
                        onChange={handleChange}
                    />
                </div>
                {error.release && <span>》》 {error.release}</span>}

                <div>
                <h3>Rating:</h3>
                    <input 
                        type="number"
                        name="rating"
                        value={input.rating}
                        placeholder="Rating..."
                        onChange={handleChange}
                    />
                </div>
                {error.rating && <span>》》 {error.rating}</span>}

                <div>
                    <button
                        type="submit"
                        value="Create"
                        disabled={disabled}
                    >Create</button>
                </div>
            </form>
        </div>
    )
}