const {Videogame, Genre} = require("../db");

const postGame = async (name, description, genres, platforms, image, release, rating) => {
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
    
    return (`The Game ${name} was created successfully.`);
}

module.exports = {postGame};