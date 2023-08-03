require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");
const {Op} = require("sequelize");



const getByName = async (name) => {
    const getDbGames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            }
        },
        include: [
            {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        ]
    })

    let getApiName = (await axios(`${API_URL}/games?key=${API_KEY}&search=${name}`))
        .data.results.map(nam => {
            const genArray = nam.genre ? nam.genres.map((gen) => gen.name) : []
            const platArray = nam.platforms ? nam.platforms.map((gen) => gen.name) : []
                return {
                    id: nam.id ? nam.id : "undifined",
                    name: nam.name ? nam.name : "",
                    description: nam.description,
                    genres: genArray,
                    platforms: platArray,
                    image: nam.background_image,
                    release: nam.released,
                    rating: nam.rating,
                }
            });

    let getGameName = getDbGames.concat(getApiName);

    const results = getGameName;

    if (results.length){
        return results;
    }
    throw Error("No se encontraron")

}
module.exports = {getByName};