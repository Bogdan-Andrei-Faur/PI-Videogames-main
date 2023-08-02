const {getGames} = require("../controllers/getVideogames");
const {getByName} = require("../controllers/getByName");

const getVideogamesHandler = async (req, res) => {
    try {
        const {name} = req.query;
        const games = name ? await getByName(name): await getGames();
        
        res.status(200).json(games);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = {getVideogamesHandler};