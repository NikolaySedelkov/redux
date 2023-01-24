import {useDispatch} from "react-redux";
import {removeProduct, updateProductField} from "../actions/actionFunction.js";

export function ProductList({items}) {
    const dispatch = useDispatch();
    const handleRemove = id         => { dispatch(removeProduct(id)) };
    const handleUpdate = product    => { dispatch(updateProductField(product)) };

    if(items.length === 0) return <p>Список пуст</p>;

    return (
        <ul>
        {
            items.map(o => (
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                    <button onClick={() => handleUpdate(o)}>✎</button>
                </li>
            ))
        }
        </ul>
    )
}


export function FilterProductList({items, search}) {
    console.log(items, search)
    const o = items.filter(item => item.name === search);
    if(o.length === 0) return <p>Ничего не найдено</p>;

    return <ProductList items={o}/>
}