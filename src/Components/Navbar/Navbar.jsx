import { KeyboardArrowDown, PhoneInTalk } from "@mui/icons-material";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const style = {
    width: "15px",
    height: "15px",
  };
  return (
    <div className="Navbar">
      <div className="NavbarLeft">
        <div className="NavbarLeftItem item1">
          <p>INR ₹</p>
          <KeyboardArrowDown style={style} />
        </div>
        <div className="NavbarLeftItem  item2">
          <p>ENGLISH</p>
          <KeyboardArrowDown style={style} />
        </div>
        <div className="NavbarLeftItem item3">
          <PhoneInTalk style={style} />
          <span>+440 0(111) 044 833</span>
        </div>
      </div>
      <div className="NavbarRight">
        <Link to="/login" className="LinkWithoutStyle">
          <p className="NavbarRightItem" style={{ textDecoration: "none" }}>
            LOGIN
          </p>
        </Link>
        <Link to="/register" className="LinkWithoutStyle">
          <p className="NavbarRightItem" style={{ textDecoration: "none" }}>
            CREATE ACCOUNT
          </p>
        </Link>
        <p className="NavbarRightItem">WISHLIST</p>
      </div>
    </div>
  );
};

export default Navbar;
