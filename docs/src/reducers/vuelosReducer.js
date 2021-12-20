import {
    FETCH_VUELOS_SUCCESS
} from '../actions/types'

const INIT_STATE = {
    recentVuelos: []
}
export default function(state = INIT_STATE, action){
    switch(action.type) {
        case FETCH_VUELOS_SUCCESS: { 
            const recentVuelos  = action.payload;
            return {
                ...state,
                recentVuelos
            }
        }
        default:
            return state;
    }
}
