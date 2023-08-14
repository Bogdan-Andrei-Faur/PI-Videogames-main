require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");

const getById = async (id, type) => {
    if (type === "bd"){
        let findDb = await Videogame.findByPk(id, {
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        });
        
        return findDb;
    } else {
        const api = await axios(`${API_URL}/games/${id}?key=${API_KEY}`);
        
        const game = {
            id: api.data.id,
            name: api.data.name,
            description: api.data.description,
            genres: api.data.genres.map((gen) => gen.name),
            platforms: api.data.platforms.map((platf) => platf.platform.name),
            image: api.data.background_image,
            release: api.data.released,
            rating: api.data.rating,
        }
        return game;
    }
}
getById()
module.exports = {getById};