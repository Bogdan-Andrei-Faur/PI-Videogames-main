const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const Videogames = require("./Videogames");
const {getGenresHandler} = require("../handlers/getGenresHandler");
const { test } = require('../Test/test');
// const Genres = require("./Genres");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", Videogames);
router.get("/genres", getGenresHandler);
router.get("/test", test);

module.exports = router;
