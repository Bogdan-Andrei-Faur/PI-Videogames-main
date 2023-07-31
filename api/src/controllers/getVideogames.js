require("dotenv").config();
const {API_KEY, API_URL} = process.env;
const axios = require("axios");
const {Videogame, Genre} = require("../db");

// Trae 5 paginas de la API.
const getApiGames = async () => {
    try {
        let apiGames = [];
        
        for (let i = 1; i <= 5; i++){
            let page = await axios.get(`${API_URL}/games?key=${API_KEY}&page=${i}`);
            
            let game = page.data.results.map((g) => {
                return {
                    id: g.id,
                    name: g.name,
                    genres: g.genres.map((gen) => gen.name),
                    description: g.description,
                    platforms: g.platforms.map((platf) => platf.platform.name),
                    image: g.background_image,
                    release: g.released,
                    rating: g.rating,
                }
            })
            apiGames = apiGames.concat(game);
        }
        return apiGames;
    } catch (err) {
        console.log(err);
    }
}

// Trae todos los juegos de la Base de Datos.
const getDbGames = async () => {
    try {
        return await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })
    } catch (err) {
        console.log(err);
    }
}

// Une la Api y la Base de Datos para retornarlo en conjunto.
const getAllGames = async (req, res) => {
    const {name} = req.query;

    let apiInfo = await getApiGames();
    let DbInfo = await getDbGames();
    
    const allGames = DbInfo.concat(apiInfo);

    try {
        if (name) {
            let getApiName = (await axios(`${API_URL}/games?key=${API_KEY}&search=${name}`))
                .data.results.slice(0, 15).map(nam => {
                    return {
                        id: nam.id,
                        name: nam.name,
                        genres: nam.genres.map((gen) => gen.name),
                        platforms: nam.platforms.map((platf) => platf.platform.name),
                        image: nam.background_image,
                        release: nam.released,
                        rating: nam.rating,
                }
            });
            let getDbName = DbInfo.filter(game => game.name.toUpperCase().includes(name.toUpperCase()));
            let getGameName = getDbName.concat(getApiName);
        
            if (getGameName.length === 0){
                res.status(404).send("Falla busqueda");
            } else {
                res.send(getGameName);
            }
        } else {
            res.send(allGames);
        }
    } catch (error) {
        res.status(404).send("Falla try");
    }
}

module.exports = {getAllGames};