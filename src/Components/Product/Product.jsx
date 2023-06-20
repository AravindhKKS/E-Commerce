import { Products } from "../../Data";
import ProductItem from "../ProductItem/ProductItem";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      {Products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Product;
