const {postGame} = require("../controllers/postVideogames");

const postGameHandler = async (req, res) => {
    try {
        const {name, description, genres, platforms, image, release, rating} = req.body;

        const response = await postGame(name, description, genres, platforms, image, release, rating);

        res.status(201).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {postGameHandler};