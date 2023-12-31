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
        .data.results.slice(0,15).map(nam => {
            const apiGenres = nam.genres ? nam.genres.map(x=>{
                return {name: x.name}
            }) : [{name:"no genres"}]

                return {
                    id: nam.id,
                    name: nam.name,
                    description: nam.description,
                    genres: apiGenres,
                    platforms: nam.platforms.map((platf) => platf.platform.name),
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