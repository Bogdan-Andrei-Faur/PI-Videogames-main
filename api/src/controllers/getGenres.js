require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const { Genre } = require("../db");

const getGenres = async () => {
    let apiGenres = (await axios(`${API_URL}/genres?key=${API_KEY}`))
        .data.results.map(gen => ({
            id: gen.id,
            name: gen.name
        }))

    await Genre.bulkCreate(apiGenres, {ignoreDuplicates: true});

    const dbGenres = await Genre.findAll()

    console.log("Los generos han cargado correctamente")
    return dbGenres;
};

module.exports = {getGenres};