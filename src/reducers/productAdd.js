import {PRODUCT_CHANGE,
        PRODUCT_UPDATE_FIELD,
        PRODUCT_UPDATE,
        PRODUCT_EMPTY} from "../actions/actionProduct.js";
const initialState = {
    func: PRODUCT_CHANGE,
    id: 0, 
    name: "", 
    price: ""
};
export default function productAddReducer(state = initialState, action)
{
    switch (action.type) {
    case PRODUCT_CHANGE:
        const {name, value} = action.payload;
        return {...state, [name]: value};
    case PRODUCT_UPDATE_FIELD:
        return {...action.payload, func: PRODUCT_UPDATE};
    case PRODUCT_EMPTY:
        return action.payload;
    default:
        return state;
    }
}
