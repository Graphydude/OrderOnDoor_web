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
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowDown,
} from "react-icons/md";
import "../Styles/LoginFormSide.css";
import { FaXmark } from "react-icons/fa6";
import logo from "../Images/NavbarImages/logo.webp";
import secondLogo from "../Images/NavbarImages/LaptopSizeLogo.webp";
import { useState } from "react";

const Navbar = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [IsLoginFormOpen ,setIsLoginFormOpen] = useState(false);

  const listToggle = () => {
    setIsListOpen(!isListOpen);
  };

  const listStyle = {
    display: !isListOpen ? "none" : "flex",
  };

  const loginToggle = () => {
    setIsLoginFormOpen(!IsLoginFormOpen);
  }

  const loginStyle = {
    display: !IsLoginFormOpen ? "none" : "flex",
  }

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 250);
  });

  window.addEventListener("click", function() {
    const loginAnimation = this.document.querySelector(".login-form-side-empty-div");
    loginAnimation.classList.add("loginAnimation")
  })


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
              <a href="#" onClick={loginToggle}>LOGIN/REGISTER</a>
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
                  className="second-nav-input"
                />
              </form>
            </div>
          </div>
        </nav>
        <div className="menu-opener">
          <ul className="browse-categories">
            <li>
              <FaBars className="menu-icon" />
              <h3>BROWSE CATEGORIES</h3>
              <MdKeyboardArrowDown className="arrow-icon" />
              <div className="browse-categories-list-div">
                <ul className="browse-categories-list">
                  <li>
                    <a href="#">featured Local Authors</a>
                  </li>
                  <li>
                    <a href="#">Islamic Book Deals</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">English Books/Novels</a>
                  </li>
                  <li>
                    <a href="#">Urdu Books/Novels</a>
                  </li>
                  <li>
                    <a href="#">Books Series</a>
                  </li>
                  <li>
                    <a href="#">Children's Books</a>
                  </li>
                  <li>
                    <a href="#">Islamic Books</a>
                  </li>
                  <li>
                    <a href="#">IELTS Books</a>
                  </li>
                  <li>
                    <a href="#">CSS/PMS Books</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="book-categories">
            <a href="#">ENGLISH BOOKS</a>
            <a href="#">URDU BOOKS</a>
            <a href="#">ISLAMIC BOOKS</a>
            <a href="#">IELTS BOOKS</a>
            <a href="#">CSS/PMS BOOKS</a>
            <a href="#">MARKERS & HIGHLIGHTERS</a>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </header>
        {/* Login form side */}
        <div style={loginStyle} className="login-form-side-back-div">
          <div className="login-form-side-empty-div" onClick={loginToggle}></div>
          <div className="login-form-side">
            <div className="login-title-div">
              <h1>SIGN IN</h1>
              <span className="login-form-close" onClick={loginToggle}>
                <FaXmark className="login-form-x-icon" /> CLOSE
              </span>
            </div>
            <form>
              <div className="user-name-or-email-div form-label-and-input">
                <label>User name or email</label>
                <input className="form-input" type="text" />
              </div>
              <div className="password-div form-label-and-input">
                <label>Password</label>
                <input className="form-input" type="text" />
              </div>
              <button className="form-login" type="submit">LOG IN</button>
              <div className="login-form-footer">
                <label>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#">Lost your password?</a>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
