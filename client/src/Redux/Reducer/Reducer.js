import { GET_GAMES, GET_GAME_BY_NAME, GET_GAME_DETAIL, CLEAN_STATE_NAME, CLEAN_DETAIL} from "../Actions/Actions";

const initialState = {
    allGames: [],
    byName: [],
    gameDetail: {},
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
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
//---------------------------------------------------------------------
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
        default:
            return state;
    }
}

export default reducer;