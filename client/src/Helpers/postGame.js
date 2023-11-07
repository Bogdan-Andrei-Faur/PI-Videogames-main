import axios from "axios";

export const postGame = input => {
    try {
        const res = axios.post("https://gamelibraryhub-server.onrender.com/", input)
        if (res.status === 201) console.log('Videogame created successfully')
    } catch (err) {
        return console.log(err.message)
    }
}