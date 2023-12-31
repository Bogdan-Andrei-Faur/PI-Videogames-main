const {getById} = require("../controllers/getById");

const getByIdHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const type = isNaN(id) ? "bd" : "api";

        const games = await getById(id, type);

        res.status(200).json(games);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {getByIdHandler};