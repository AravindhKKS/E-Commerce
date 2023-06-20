import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import HomeNav from "../../Components/HomeNav/HomeNav";
import Subcription from "../../Components/Subcription/Subcription";
import Footer from "../../Components/Footer/Footer";
import { Add, KeyboardBackspace, Remove } from "@mui/icons-material";

const Cart = () => {
  const style = {
    width: "12px",
    height: "12px",
    padding: "10px",
    border: "1px solid lightgray",
    cursor: "pointer",
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <HomeNav />
      <div className="cartWrapper">
        <div className="cartLeft">
          <div className="cartTitleContainer">
            <div className="cartTitle">PRODUCT</div>
            <div className="cartTitle">PRICE</div>
            <div className="cartTitle">QUNTITY</div>
            <div className="cartTitle">SUBTOTAL</div>
          </div>

          <div className="cartProduct">
            <div className="cartImage">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/x/v/e/l-all-rbcropn-sky-one-nb-nicky-boy-original-imagkq6hgg5gqsep.jpeg?q=70"
                alt=""
              />
              <p className="productName">NB NICKY BOY</p>
            </div>
            <div className="price">₹ 699</div>
            <div className="quntity">
              <Remove className="carticon" style={style} />
              <span>1</span>
              <Add className="carticon" style={style} />
            </div>
            <div className="subtotal">₹ 699</div>
          </div>
          <div className="cartProduct">
            <div className="cartImage">
              <img
                src="https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_front-494x593.jpg"
                alt=""
              />
              <p className="productName">HAPPY NINJA</p>
            </div>
            <div className="price">₹ 350</div>
            <div className="quntity">
              <Remove className="carticon" style={style} />
              <span>2</span>
              <Add className="carticon" style={style} />
            </div>
            <div className="subtotal">₹ 700</div>
          </div>
          <div className="cartButton">
            <button className="continue">
              <KeyboardBackspace style={{ marginRight: "10px" }} />
              CONTINUE SHOPPING
            </button>
            <button className="update">UPDATE CART</button>
          </div>
        </div>
        <div className="cartRight">
          <div className="CardSummary">
            <div className="summaryTitle">ORDER SUMMARY</div>
            <div className="summaryItem">
              <div className="summaryItemText">Subtotal</div>
              <div className="summaryItemPrice">Rs: 1448</div>
            </div>
            <div className="summaryItem">
              <div className="summaryItemText">Estimated Shipping</div>
              <div className="summaryItemPrice">Rs: 100</div>
            </div>
            <div className="summaryItem">
              <div className="summaryItemText">Shipping Discount</div>
              <div className="summaryItemPrice">Rs: -100</div>
            </div>
            <div
              className="summaryItem"
              style={{ fontWeight: "500", fontSize: "24px" }}
            >
              <div className="summaryItemText total">Total</div>
              <div className="summaryItemPrice price">Rs: 1399</div>
            </div>
            <button className="summaryButton">CHECKOUT NOW</button>
          </div>
        </div>
      </div>

      <Subcription />
      <Footer />
    </div>
  );
};

export default Cart;
/* <div className="cart"></div>          <div className="cart"></div>
          <div className="cart"></div> */
