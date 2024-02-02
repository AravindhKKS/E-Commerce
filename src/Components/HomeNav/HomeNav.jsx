import { Search, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./HomeNav.css";
import { Badge } from "@mui/material";

const HomeNav = () => {
  return (
    <div className="HomeNav">
      <div className="HomeNavWrapper">
        <div className="HomeNavLeft">
          <Link to="/" className="LinkWithoutStyle">
            <img
              src="https://cdn.shopify.com/s/files/1/1964/8879/files/belle_754a409d-2b37-4e6f-840c-9b118579a0ed_130x.png?v=1614736019"
              alt=""
              className="Logo"
            />
          </Link>
        </div>
        <div className="HomeNavCenter">
          <p className="HomeNavText">HOME</p>
          <p className="HomeNavText">SHOP</p>
          <Link to="/singleProduct" className="LinkWithoutStyle">
            <p className="HomeNavText">PRODUCT</p>
          </Link>
          <Link to="/product" className="LinkWithoutStyle">
            <p className="HomeNavText">PAGES</p>
          </Link>
          <p className="HomeNavText">BLOG</p>
          <p className="HomeNavText">
            <b>BUY NOW!</b>
          </p>
        </div>
        <div className="HomeNavRight">
          <div className="HomeNavInputContainer">
            <input type="text" placeholder="Search" className="Input" />
            <Search style={{ color: "gray", fontSize: "15px" }} />
          </div>
          <Link to="/cart" className="LinkWithoutStyle">
            <Badge badgeContent={2} color="primary">
              <ShoppingCart />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
