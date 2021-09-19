import { 
            FETCH_VEHICLES,
            FETCH_PLANETS,
            GET_TOKEN,
            GET_TIME
        } from '../actions/types';
const spaceReducer = (state = {
    vehicles: {},
    planets: {},
    token: {},
    time: []
},
    action
) =>
{
    switch (action.type)
    {
        case FETCH_VEHICLES:
            return Object.assign(
                {},
                state,
                {
                    vehicles: action.payload
                }
            );
                    
        case FETCH_PLANETS:
            return Object.assign({},
                state,
                {
                    planets: action.payload
                }
            );
        case GET_TOKEN:
            return Object.assign(
                {},
                state,
                {
                    token: action.payload
                }
            );
        case GET_TIME:
                         
            return Object.assign({}, state, {time: action.payload});
        default:
            return state;
    }
};
export default spaceReducer;
