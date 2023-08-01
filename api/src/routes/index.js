const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const Videogames = require("./Videogames");
const Genres = require("./Genres");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", Videogames);
// router.use("/genres", Genres);

module.exports = router;
