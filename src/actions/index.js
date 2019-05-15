import {    
            FETCH_VEHICLES, 
            FETCH_PLANETS,
            GET_TOKEN,
            GET_TIME
        } from './types';
import findfalcone from '../apis/findfalcone';

export const getToken = () => async ( dispatch ) => {
    const response = await findfalcone.post('/token');
    dispatch({ type: GET_TOKEN, payload: response.data });
}
export const getTime = ( time ) => ( dispatch ) => {
    dispatch({type:GET_TIME, payload: time})
}
export const fetchVehicles = () => async ( dispatch ) => {
    const response = await findfalcone.get('/vehicles');
    dispatch({ type: FETCH_VEHICLES, payload: response.data });
}
export const fetchPlanets = () => async ( dispatch ) => {
    const response = await findfalcone.get('/planets');
    dispatch({ type: FETCH_PLANETS, payload: response.data  })
}
