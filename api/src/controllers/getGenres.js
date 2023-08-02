require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");

const getGenres = async () => {
    let apiGenres = (await axios(`${API_URL}/genres?key=${API_KEY}`))
        .data.results.map(gen => ({
            id: gen.id,
            name: gen.name
        }))

    await Genre.bulkCreate(apiGenres, {ignoreDuplicates: true});

    console.log("Se ha cargado correctamente")
    
};

module.exports = {getGenres};