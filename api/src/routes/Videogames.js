const {Router} = require("express");
const router = Router();

const {getVideogamesHandler} = require("../handlers/videogamesHandlers");
const {getByIdHandler} = require("../handlers/getByIdHandler");
const {postGameHandler} = require("../handlers/postVideogamesHandler");


// Ruta AllGames y busqueda por nombre.
router.get("/", getVideogamesHandler);
// Ruta que busca por ID.
router.get("/:id", getByIdHandler);
// Ruta para crear un Videojuego.
router.post("/", postGameHandler);
// Ruta para borrar un Videojuego.[EXTRA]

module.exports = router;