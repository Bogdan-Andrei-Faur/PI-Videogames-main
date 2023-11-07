import axios from "axios";

export const postGame = input => {
    try {
        const res = axios.post("http://localhost:3001/videogames/", input)
        if (res.status === 201) console.log('Videogame created successfully')
    } catch (err) {
        return console.log(err.message)
    }
}