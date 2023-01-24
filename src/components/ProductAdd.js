import {useSelector, useDispatch} from 'react-redux';
import {changeProduct, addProduct, updateProduct, emptyProductField} from '../actions/actionFunction.js';
import {PRODUCT_CHANGE, PRODUCT_UPDATE} from "../actions/actionProduct.js";

export default function ProductAdd() {
    const item = useSelector(state => state.productAdd);
    const dispatch = useDispatch();
    const handleChange = evt => {
        const {name, value} = evt.target;
        dispatch(changeProduct({name, value}));
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        switch(item.func){
            case PRODUCT_CHANGE:
                dispatch(addProduct(item.name, item.price));
            break
            case PRODUCT_UPDATE:
                dispatch(updateProduct(item));
                dispatch(emptyProductField());
            break
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price} />
            <button type='submit'>Save</button>
        </form>
    );
}
