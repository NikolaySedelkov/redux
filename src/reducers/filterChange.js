import { FILTER_CHANGE} from "../actions/actionProduct.js";

const initialState = "";

export default function filterChangeReducer(state = initialState, action){
    switch(action.type){
        case FILTER_CHANGE:
            return action.payload;
        default:
            return state;
    }
}