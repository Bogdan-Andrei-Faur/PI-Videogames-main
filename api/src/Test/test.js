const test = async (req, res) => {
    try {
        res.status(200).json("Test de peticiones: Funciona correctamente");
    } catch (error) {
        res.status(400).json("Test de peticiones: No funciona correctamente", error.message);
    }
}

module.exports = {test};