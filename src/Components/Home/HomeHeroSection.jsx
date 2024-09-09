import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FirstImage from "../../Images/HomeHeroSwiperImages/FirstImage.webp";
import SecondImage from "../../Images/HomeHeroSwiperImages/SecondImage.webp";
import ThirdImage from "../../Images/HomeHeroSwiperImages/ThirdImage.webp";
import FourthImage from "../../Images/HomeHeroSwiperImages/FourthImage.webp";
import FifthImage from "../../Images/HomeHeroSwiperImages/FifthImage.webp";
import SixthImage from "../../Images/HomeHeroSwiperImages/SixthImage.webp";
import SeventhImage from "../../Images/HomeHeroSwiperImages/SeventhImage.webp";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const Home = () => {
  return (
    <div className="Home-page">
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
      <div className="swiper-div">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={FirstImage} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SecondImage} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ThirdImage} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FourthImage} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={FifthImage} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SixthImage} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SeventhImage} alt="Image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
