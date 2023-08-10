import axios from "axios"

//Traigo todos los juegos
export const getGames = () => {
    return dispatch => axios("http://localhost:3001/videogames")
        .then(res => dispatch({type: GET_GAMES, payload: res.data}))
        .catch(error => alert(error))
}
export const GET_GAMES = "GET_GAMES";

//---------------------------------------------------------------------

//Traigo los juegos por nombre
export const getByName = name => {
    return dispatch => {
    axios(`http://localhost:3001/videogames?name=${name}`)
        .then(res => {
        dispatch({type: GET_GAME_BY_NAME, payload: res.data});
        })
        .catch(error => alert(error));
    }
    };
export const GET_GAME_BY_NAME = 'GET_GAME_BY_NAME';
//---------------------------------------------------------------------

//Traigo los generos
export const getGenres = () => {
    return dispatch => axios("http://localhost:3001/genres")
        .then(res => dispatch({type: GET_GENRES, payload: res.data}))
        .catch(error => alert(error))
}
export const GET_GENRES = "GET_GENRES";

//---------------------------------------------------------------------

//Traigo los juegos por id
export const getById = id => {
    return dispatch => axios(`http://localhost:3001/videogames/${id}`)
        .then(res => dispatch({type: GET_GAME_DETAIL, payload: res.data}))
        .catch(error => alert(error));
};
export const GET_GAME_DETAIL = 'GET_GAME_DETAIL';

//---------------------------------------------------------------------

//Borra el State de GetByName
export const cleanStateName = (payload) => {
    return dispatch => {
        dispatch({type: CLEAN_STATE_NAME, payload})
    }
}
export const CLEAN_STATE_NAME = "CLEAN_STATE_NAME"

//---------------------------------------------------------------------

//Borra el State de GetById
export const cleanGameDetail = payload => {
    return dispatch => {
        dispatch({ type: CLEAN_DETAIL, payload})
    }
};
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

//---------------------------------------------------------------------

//Ordeno por Nombre(Ascendete y Descendente)
export const order = payload => {
    return dispatch => {
        dispatch({ type: ORDER, payload })
    }
};
export const ORDER = 'ORDER';

//---------------------------------------------------------------------

//Filtro por Genero
export const genresFilter = payload => {
    return dispatch => {
        dispatch({ type: GENRES_FILTER, payload})
    }
};
export const GENRES_FILTER = 'GENRES_FILTER';

//---------------------------------------------------------------------

//Filtro por Origen(API o Base de Datos)
export const originFilter = payload => {
    return dispatch => {
        dispatch({ type: ORIGIN_FILTER, payload})
    }
};
export const ORIGIN_FILTER = 'ORIGIN_FILTER';

//---------------------------------------------------------------------

//Paginacion
export const setPage = payload => {
    return dispatch => {
        dispatch({ type: SET_PAGE, payload: payload});
    }
};
export const SET_PAGE = "SET_PAGE";