import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductList, FilterProductList } from "./components/ProductList.js";
import ProductAdd from "./components/ProductAdd.js";
import { changeFilter } from "./actions/filterFunction.js";

function App() {
  const filter  = useSelector(state => state.filterChange);
  const items   = useSelector(state => state.productList);
  console.log(filter);
  const dispatch = useDispatch();
  const hangeChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeFilter(value));
  }
  return (
    <div className="App">
      <ProductAdd/>
      {filter!==""?<FilterProductList items={items} search={filter}/>:<ProductList items={items} />}
      <hr/>
      <label htmlFor="filter">Фильтр:</label><input value={filter} onChange={hangeChange} id="filter" type="text"/>
    </div>
  );
}

export default App;
