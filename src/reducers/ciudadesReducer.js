import {
    FETCH_CIUDADES_SUCCESS,
    FETCH_CIUDADES_ERROR
} from '../actions/types'

const INIT_STATE = {
    recentCiudades: []
}
export default function(state = INIT_STATE, action){
    switch(action.type) {
        case FETCH_CIUDADES_SUCCESS: { 
            const recentCiudades  = action.payload;
            return {
                ...state,
                recentCiudades
            }
        }
        case FETCH_CIUDADES_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }
        default:
            return state;
    }
}
