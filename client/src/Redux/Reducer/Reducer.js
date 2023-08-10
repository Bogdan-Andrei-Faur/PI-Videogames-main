import { GET_GAMES, GET_GAME_BY_NAME, GET_GAME_DETAIL, GET_GENRES, CLEAN_STATE_NAME, CLEAN_DETAIL, GENRES_FILTER, ORIGIN_FILTER, ORDER} from "../Actions/Actions";
import { nameASC } from "../../Helpers/sort";

const initialState = {
    allGames: [],
    byName: [],
    gameDetail: {},
    genres: [],
    genresFilter: "",
    originFilter: "",
    order: "",
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
//------------------------------Todos los GET------------------------------
        case GET_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        case GET_GAME_BY_NAME:
            return {
                ...state,
                byName: action.payload
            }
        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload.sort(nameASC)
            }
//-----------------------------Todos los CLEAN-----------------------------
        case CLEAN_STATE_NAME:
            return {
                ...state,
                byName: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
//----------------------------Todos los FILTROS----------------------------
        case ORDER:
            return {
                ...state,
                order: action.payload
            }
        case GENRES_FILTER:
            return {
                ...state,
                genresFilter: action.payload
            }
        case ORIGIN_FILTER:
            return {
                ...state,
                originFilter: action.payload
            }
        default:
            return state;
    }
}

export default reducer;