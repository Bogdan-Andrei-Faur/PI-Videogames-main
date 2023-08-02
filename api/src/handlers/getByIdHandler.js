const {getById} = require("../controllers/getById");

const getByIdHandler = async (req, res) => {
    try {
        const {id} = req.params;

        const games = await getById(id);

        res.status(200).json(games);
    } catch (error) {
        res.status(404).json({error: error.messaje});
    }
}

module.exports = {getByIdHandler};