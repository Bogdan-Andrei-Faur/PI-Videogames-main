import axios from "axios";

export const postGame = input => {
    try {
        const res = axios.post("http://localhost:3001/videogames/", input)
        if (res.status === 201) alert('Videogame created successfully')
    } catch (err) {
        return alert(err.message)
    }
}