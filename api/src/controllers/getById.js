require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");

const getById = async (id) => {
    if (id.length > 5){
        let findDb = await Videogame.findOne({
            where: {id},
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        });
        
        if (findDb){
            let gameId = {
                id: findDb.id,
                name: findDb.name,
                genres: findDb.genres.map((gen) => gen.name),
                platforms: findDb.platforms.map((platf) => platf.platform.name),
                image: findDb.background_image,
                release: findDb.released,
                rating: findDb.rating,
            }
            return gameId;
        }
    } else {
        const api = await axios(`${API_URL}/games/${id}?key=${API_KEY}`);
        
        const game = {
            id: api.data.id,
            name: api.data.name,
            genres: api.data.genres.map((gen) => gen.name),
            platforms: api.data.platforms.map((platf) => platf.platform.name),
            image: api.data.background_image,
            release: api.data.released,
            rating: api.data.rating,
        }
        return game;
    }
}

module.exports = {getById};