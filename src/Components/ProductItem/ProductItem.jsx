import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="ProductItem">
      <div className="round"></div>
      <img src={product.img} alt="" />
      <div className="iconContainer">
        <div className="brand" style={{ color: product.bg }}>
          <p>{product.title}</p>
          <p>RS: {product.rs}</p>
        </div>

        <div className="icon">
          <ShoppingCartOutlined />
        </div>
        <div className="icon">
          <SearchOutlined />
        </div>
        <div className="icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
