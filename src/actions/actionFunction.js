import { PRODUCT_CREATE,
      PRODUCT_DELETE, 
      PRODUCT_CHANGE, 
      PRODUCT_UPDATE_FIELD,
      PRODUCT_UPDATE,
        PRODUCT_EMPTY} from './actionProduct.js';

export function addProduct(name, price) {
    return {type: PRODUCT_CREATE, payload: {name, price}};
}

export function removeProduct(id) {
    return {type: PRODUCT_DELETE, payload: {id}};
}

export function changeProduct(product){
    return {type: PRODUCT_CHANGE, payload: product}
}

export function updateProduct(product){
    return {type: PRODUCT_UPDATE, payload: product}
}

export function updateProductField(product){
    return {type: PRODUCT_UPDATE_FIELD, payload: product}
}

export function emptyProductField(product={id: 0, func: PRODUCT_CHANGE, name: "", price: ""}){
    return {type: PRODUCT_EMPTY, payload: product}
}
