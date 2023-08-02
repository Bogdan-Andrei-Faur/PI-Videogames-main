require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");

const getGames = async () => {
    let apiGames = [];

    for (let i = 1; i <= 5; i++){
        let page = await axios.get(`${API_URL}/games?key=${API_KEY}&page=${i}`);

        let game = page.data.results.map((g) => {
            return {
                id: g.id,
                name: g.name,
                description: g.description,
                genres: g.genres.map((gen) => gen.name),
                platforms: g.platforms.map((platf) => platf.platform.name),
                image: g.background_image,
                release: g.released,
                rating: g.rating,
            }
        })
        apiGames = apiGames.concat(game);
    }

    let dbGames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    })

    return (dbGames.concat(apiGames));
}

module.exports = {getGames};