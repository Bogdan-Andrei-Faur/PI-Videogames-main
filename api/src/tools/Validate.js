const {Genre} = require("../db");

const validate = async (req, res, next) => {
    const {name, description, genres, platforms, image, release, rating} = req.body;

    if (!name || typeof name !== "string"){
        return res.status(400).json({message: "El nombre debe tener al menos una letra."});
    }
    if (!description || typeof description !== "string" || description.length < 10){
        return res.status(400).json({message: "La descripcion debe ser un string y contener un minimo de 10 caracteres."});
    }
    if (!Array.isArray(platforms) || platforms.length === 0){
        return res.status(400).json({message: "Debes especificar una plataforma como minimo."});
    }
    if (!image || typeof image !== "string"){
        return res.status(400).json({message: "La imagen debe ser de tipo String."});
    }
    if (!release || typeof release !== "string" || release.length < 10){
        return res.status(400).json({message: "La fecha debe ser un string y contener 10 caracteres.(2023-12-31)"});
    }
    if (!rating || typeof rating !== "number" || rating > 5 || rating < 0){
        return res.status(400).json({message: "La puntuacion debe ser un numero y debe ser entre 0 y 5"});
    }
    if (!Array.isArray(genres)){
        return res.status(400).json({message: "La propiedad generos, debe ser de tipo Array."});
    }

    for (let i = 0; i < genres.length; i++){
        const gen = await Genre.findOne({
            where: {name: genres[i]}
        })
        if (!gen){
            return res.status(400).json({message: "El genero debe coincidir con uno de la base de datos."});
        }
    }
    next();
}

module.exports = {validate};