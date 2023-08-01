const {Router} = require("express");
const router = Router();

const {getVideogamesHandler} = require("../handlers/videogamesHandlers");
const {getGameById} = require("../controllers/getById");
// const {getByName} = require("../controllers/getByName");
const {postGame} = require("../controllers/postVideogames");


// Ruta AllGames y busqueda por nombre.
router.get("/", getVideogamesHandler);
// Ruta que busca por ID.
router.get("/:id", getGameById);
// Ruta para crear un Videojuego.
router.post("/", postGame);
// Ruta para borrar un Videojuego.[EXTRA]

module.exports = router;