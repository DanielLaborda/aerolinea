import { FETCH_CIUDADES_SUCCESS, FETCH_VUELOS_SUCCESS } from './types.js';
import axios from 'axios';



export function fetchCiudades() {
    return function(dispatch) {
        axios.get('https://e6bde57a-0d9f-4013-b4b3-727fc4321fe8.mock.pstmn.io/ciudades').then(response => {   
              
            dispatch({
                type: FETCH_CIUDADES_SUCCESS,
                payload: response.data
            });
        }).catch(error => {
            console.log("Error en la api" + error);    
        });
    }
}

export function fetchVuelos() {
    return function(dispatch) {
        axios.get('https://e6bde57a-0d9f-4013-b4b3-727fc4321fe8.mock.pstmn.io/vuelos').then(response => {   
              
            dispatch({
                type: FETCH_VUELOS_SUCCESS,
                payload: response.data
            });
        }).catch(error => {
            console.log("Error en la api" + error);    
        });
    }
}