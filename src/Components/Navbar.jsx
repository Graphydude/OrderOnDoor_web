import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../Images/NavbarImages/logo.webp";
import secondLogo from "../Images/NavbarImages/LaptopSizeLogo.webp";
import { useState } from "react";

const Navbar = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const listToggle = () => {
    setIsListOpen(!isListOpen);
  };

  const listStyle = {
    display: !isListOpen ? "none" : "flex"
  }

  return (
    <div className="navbar-back-div">
      <header>
        <div className="announcement-bar-back-div">
          <div className="announcement-bar">
            <div className="announcing">
              <h1>
                Get flat 10% off on Direct Bank Transfer with code "FLAT10"!
              </h1>
            </div>
            <div className="announcement-bar-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
              <FaYoutube className="icon" />
              <FaPinterest className="icon" />
              <span className="announcement-bar-lines"></span>
            </div>
          </div>
        </div>
        <nav>
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="search-div">
              <form className="nav-search">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="nav-input"
                />
                <div className="search-list" onClick={listToggle}>
                  <h1>SELECT CATEGORY</h1>
                  <MdOutlineKeyboardArrowDown className="search-list-arrow" />
                  <div className="search-list-options" style={listStyle}>
                    <a href="#">11 11 lowest price Books</a>
                    <a href="#">199 Rs. Books</a>
                    <a href="#">200 to 250 Rs. Books</a>
                    <a href="#">250 to 300 Rs. Books</a>
                    <a href="#">300 to 400 Rs. Books</a>
                  </div>
                </div>
                <FaSearch className="search-icon" />
              </form>
            </div>
            <div className="login-back-div">
              <a href="#">LOGIN/REGISTER</a>
              <FaHeart className="heart-icon" />
              <div className="shopping-card-div">
                <FaShoppingCart className="shopping-icon" />
                <span>Rs0.00</span>
              </div>
            </div>
          </div>
          {/* second navbar */}
          <div className="second-nav">
            <div className="second-nav-menu-div">
              <div className="menu-div">
                <FaBars />
                <span>MENU</span>
              </div>
              <div className="second-nav-logo">
                <img src={secondLogo} alt="logo" />
              </div>
              <div className="second-nav-shopping-icon">
                <FaShoppingCart className="shopping-icon" />
              </div>
            </div>
            <div className="second-nav-search-div">
              <form className="second-nav-search">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="nav-input"
                />
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
