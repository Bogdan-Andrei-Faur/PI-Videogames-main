require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");



const getByName = async (name) => {
    const getDbGames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    })
    let getApiName = (await axios(`${API_URL}/games?key=${API_KEY}&search=${name}`))
        .data.results.slice(0, 15).map(nam => {
                return {
                    id: nam.id,
                    name: nam.name,
                    description: nam.description,
                    genres: nam.genres.map((gen) => gen.name),
                    platforms: nam.platforms.map((platf) => platf.platform.name),
                    image: nam.background_image,
                    release: nam.released,
                    rating: nam.rating,
                }
            });
    let getDbName = getDbGames.filter(game => game.name.toUpperCase().includes(name.toUpperCase()));
    let getGameName = getDbName.concat(getApiName);
        
    const results = getGameName;

    if (results.length){
        return results;
    }
    throw Error("No se encontraron")

}
module.exports = {getByName};