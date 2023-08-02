require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");

const getGames = async () => {
    let apiGames = [];
    const apiRequests = [];

    for (let i = 1; i <= 5; i++) {
        apiRequests.push(axios.get(`${API_URL}/games?key=${API_KEY}&page=${i}`));
    }

    const responses = await Promise.all(apiRequests);
    
    for (const response of responses) {
        const games = response.data.results.map((g) => {
            return {
                id: g.id,
                name: g.name,
                description: g.description,
                genres: g.genres.map((gen) => gen.name),
                platforms: g.platforms.map((platf) => platf.platform.name),
                image: g.background_image,
                release: g.released,
                rating: g.rating,
            };
        });
        apiGames.push(...games);
    }

    let dbGames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });

    return (dbGames.concat(apiGames));
}

module.exports = {getGames};