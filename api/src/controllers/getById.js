require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");

const getGameById = async (req, res) => {
    const {id} = req.params;
    
    if (id.length > 5){
        try {
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
                res.status(200).send(gameId);
            } else {
                res.status(404).send({ msg: "Game not found"});
            }
        } catch (error) {
            res.status(404).send({ msg: `There is no Games in Data Base with this id: ${id}`});
        }
    } else {
        try {
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
            res.status(200).send(game);
        } catch (error) {
            res.status(404).send({ msg: `There is no Games in API with this id: ${id}`});
        }
    }
}

module.exports = {getGameById};