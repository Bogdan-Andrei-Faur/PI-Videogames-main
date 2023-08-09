const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const Videogames = require("./Videogames");
const {getGenresHandler} = require("../handlers/getGenresHandler");
// const Genres = require("./Genres");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", Videogames);
router.get("/genres", getGenresHandler);

module.exports = router;
