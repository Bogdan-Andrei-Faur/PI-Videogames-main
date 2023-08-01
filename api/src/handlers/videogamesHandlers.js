const { getAllGames } = require("../controllers/getVideogames");
const {getByName} = require("../controllers/getByName");

const getVideogamesHandler = async (req, res) => {

    try {
        const {name} = req.query;
        const games = name ? await getByName(name): await getAllGames();
        
        res.status(200).send(games);
    } catch (error) {
        res.status(404).send({error: error.message});
    }
};

module.exports = {getVideogamesHandler};