import { combineReducers } from 'redux';
import ciudades from  './ciudadesReducer.js';
import vuelos from './vuelosReducer.js';

const rootReducer = combineReducers({
  ciudades, 
  vuelos
});

export default rootReducer;