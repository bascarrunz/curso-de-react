import FilterProductTable  from "../Components/Product/FilterProductTable.jsx";


import { useSelector } from 'react-redux'

const Product = () => {
    const products = useSelector((state) => state.product.dataProduct)
  return (
      <div>
          <div>
             <FilterProductTable products={products}/>
          </div>
      </div>
  );
};

export default Product;
