import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import HomeNav from "../../Components/HomeNav/HomeNav";
import Subcription from "../../Components/Subcription/Subcription";
import Footer from "../../Components/Footer/Footer";
import "./SingleProduct.css";
import {
  Add,
  BarChartOutlined,
  CheckCircleRounded,
  FacebookOutlined,
  FavoriteBorderRounded,
  Google,
  LinkedIn,
  LocalMallOutlined,
  Mail,
  Remove,
  Star,
  Twitter,
} from "@mui/icons-material";

const SingleProduct = () => {
  const style = {
    width: "20px",
    height: "20px",
    color: "lightgray",
  };

  const style1 = {
    width: "15px",
    height: "15px",
    padding: "15px",
    border: "1px solid lightgray",
  };
  const style2 = {
    display: "flex",
    alignItem: "center",
    width: "22px",
    height: "22px",
    padding: "10px",
    border: "1px solid lightgray",
    marginRight: "10px",
    cursor: "pointer",
  };

  return (
    <div className="SingleProduct">
      <Navbar />
      <Announcement />
      <HomeNav />
      <div className="SingleProductWrapper">
        <div className="SingleProductImageContainer">
          <img
            src="https://www.portotheme.com/magento2/porto/pub/media/catalog/product/cache/1ab48d32e9bd277ac1c930b6b5f97eee/s/h/shop16_product6.jpeg"
            alt=""
          />
        </div>
        <div className="SingleProductInfoContainer">
          <div className="top">
            <h1>Product Full Width</h1>
            <div className="ratings">
              <div className="star">
                <Star style={style} />
                <Star style={style} />
                <Star style={style} />
                <Star style={style} />
                <Star style={style} />
              </div>
              <div className="ratingInfo">
                Be the first to review this product
              </div>
            </div>
          </div>
          <div className="center">
            <div className="amount">$99.00</div>
            <div className="desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="available">
              AVAILABILITY:<b> IN STOCK</b>
            </div>
            <div className="sku">
              SKU:<b> 3453256</b>
            </div>
          </div>
          <div className="bottom">
            <div className="bottomcontent1">
              <div className="bottomleft">
                <Remove style={style1} className="leftIcon" />
                <span>1</span>
                <Add style={style1} className="leftIcon" />
              </div>
              <div className="bottomcenter">
                <LocalMallOutlined />
                <p>ADD TO CART</p>
              </div>
              <div className="bottomright">
                <FavoriteBorderRounded style={style2} />
                <BarChartOutlined style={style2} />
              </div>
            </div>
            <div className="bottomcontent2">
              <div className="icon">
                <FacebookOutlined />
              </div>
              <div className="icon">
                <Twitter />
              </div>
              <div className="icon">
                <LinkedIn />
              </div>
              <div className="icon">
                <Google />
              </div>
              <div className="icon">
                <Mail />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productDetails">
        <div className="ProductDetailsTitleContainer">
          <div className="ProductDetailsTitle">DETAILS</div>
          <div className="ProductDetailsTitle">REVIEWS</div>
          <div className="ProductDetailsTitle">CUSTOM TAB</div>
        </div>
        <div className="ProductInfo">
          <div className="ProductNote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </div>
          <div className="productConfic">
            <div className="conficText">
              <CheckCircleRounded />
              <p>Any Product types that You want - Simple, Configurable</p>
            </div>

            <div className="conficText">
              <CheckCircleRounded />
              <p>Downloadable/Digital Products, Virtual Products</p>
            </div>

            <div className="conficText">
              <CheckCircleRounded />
              <p>Inventory Management with Backordered items</p>
            </div>
          </div>
        </div>
      </div>
      <Subcription />
      <Footer />
    </div>
  );
};

export default SingleProduct;
