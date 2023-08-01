const {Router} = require("express");
const router = Router();

const {getAllGames} = require("../controllers/getVideogames");
const {getGameById} = require("../controllers/getById");
const {postGame} = require("../controllers/postVideogames");

// Ruta AllGames y busqueda por nombre.
router.get("/", getAllGames);
// Ruta que busca por ID.
router.get("/:id", getGameById);
// Ruta para crear un Videojuego.
router.post("/", postGame);
// Ruta para borrar un Videojuego.[EXTRA]

module.exports = router;