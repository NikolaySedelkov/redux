import {PRODUCT_CREATE, PRODUCT_DELETE, PRODUCT_UPDATE, PRODUCT_SHOW} from "../actions/actionProduct.js"
const initialState = [
    {id: 1, name: "Замена стекла", price: 21000},
    {id: 2, name: "Замена дисплея", price: 25000}
];
export default function productListReducer(state = initialState, action) {
switch (action.type) {
    case PRODUCT_CREATE:
        const {name, price} = action.payload;
        let newId = 0;
        state.forEach(el => newId=el.id);
        return [...state, {id: ++newId, name, price: Number(price)}];
    case PRODUCT_DELETE:
        const {id} = action.payload;
        return state.filter(service => service.id !== id);
    case PRODUCT_UPDATE:
        const product = action.payload;
        return state.map(service => service.id !== product.id?service:{...service, name: product.name, price: product.price });
    case PRODUCT_SHOW:
        return state.map(service => service.id !== product.id?service:{...service, name: product.name, price: product.price });
    default:
        return state;
 }
}