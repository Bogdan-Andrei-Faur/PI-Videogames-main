const {Videogame, Genre} = require("../db");

const postGame = async (req, res) => {
    const {name, description, genres, platforms, image, release, rating} = req.body;

    try {
        const newGame = await Videogame.create({
            name,
            description,
            genres,
            platforms,
            image,
            release,
            rating,
        })

        let newGameGenres = await Genre.findAll({
            where: {
                name: genres,
            }
        })

        newGame.addGenre(newGameGenres);

        res.status(201).send(`The Game "${name}" was created successfully.`);
    } catch (error) {
        res.status(404).send("Game creation failed.");
    }
}

module.exports = {postGame};