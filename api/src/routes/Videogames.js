const {Router} = require("express");
const router = Router();

const {getAllGames} = require("../controllers/getVideogames");

// Ruta AllGames y busqueda por nombre.
router.get("/", getAllGames);
// Ruta que busca por ID.

// Ruta para crear un Videojuego.

// Ruta para borrar un Videojuego.[EXTRA]

module.exports = router;