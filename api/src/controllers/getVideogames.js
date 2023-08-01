require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");

// Trae 5 paginas de la API.
const getApiGames = async () => {
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
    return apiGames;
}

// Trae todos los juegos de la Base de Datos.
const getDbGames = async () => {
    return await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    })
}

// Une la Api y la Base de Datos para retornarlo en conjunto.
const getAllGames = async () => {
    let apiInfo = await getApiGames();
    let dbInfo = await getDbGames();

    const allGames = dbInfo.concat(apiInfo);
    
    return allGames;
}

module.exports = {getAllGames};