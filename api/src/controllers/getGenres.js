// require("dotenv").config();
// const {API_KEY, API_URL} = process.env;
// const axios = require("axios");
// const {Videogame, Genre} = require("../db");

// const getGenres = async (req, res) => {
//     try {
//         const genresApi = await axios.get(`${API_URL}/genres?key=${API_KEY}`
//         )
    
//         const response = genresApi.data.results.map((el) => el.name)
    
//         const resInDb = await response.forEach((el) => {
//           Genre.findOrCreate({
//             where: { name: el },
//           })
//         })
    
//         return response
//       } catch (err) {
//         res.status(404).send("API access failed.");
//       }
// };

// getGenres();

// module.exports = {getGenres};