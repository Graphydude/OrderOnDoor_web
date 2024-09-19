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
import EnglishBookImg from "../../Images/HomeFeaturedImages/1.webp";
import RightFirstImg from "../../Images/HomeFeaturedImages/1_right.webp";
import RightSecondImg from "../../Images/HomeFeaturedImages/2_right.webp";
import RightThirdImg from "../../Images/HomeFeaturedImages/3_right.webp";
import RightFourthImg from "../../Images/HomeFeaturedImages/4_right.webp";
import BottomFirstImg from "../../Images/HomeFeaturedImages/1_bottom.webp";
import BottomSecondImg from "../../Images/HomeFeaturedImages/2_bottom.webp";

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
      {/* swiper section */}
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
      {/* featured section */}
      <div className="featured-category-div">
        <div className="title-featured-section">
          <h1>FEATURED CATEGORIES</h1>
        </div>
        <div className="above-featured-div">
          <div className="left-div featured-card">
            <img className="featured-img" src={EnglishBookImg} alt="Image" />
            <div className="name-and-num-pro-left-div same-style-nam-num-pro">
              <h1>ENGLISH NOVELS/BOOKS</h1>
              <span className="num-pro">750 products</span>
            </div>
          </div>
          <div className="right-div">
            <div className="right-first-div featured-card">
              <img className="featured-img" src={RightFirstImg} alt="Image" />
              <div className="same-style-nam-num-pro">
                <h1>URDU BOOKS</h1>
                <span className="num-pro">117 products</span>
              </div>
            </div>
            <div className="right-second-div featured-card">
              <img className="featured-img" src={RightSecondImg} alt="" />
              <div className="same-style-nam-num-pro">
                <h1>CHILDREN BOOKS</h1>
                <span className="num-pro">90 products</span>
              </div>
            </div>
            <div className="right-third-div featured-card">
              <img className="featured-img" src={RightThirdImg} alt="" />
              <div className="same-style-nam-num-pro">
                <h1>IELTS BOOKS</h1>
                <span className="num-pro">9 products</span>
              </div>
            </div>
            <div className="right-fourth-div featured-card">
              <img className="featured-img" src={RightFourthImg} alt="" />
              <div className="same-style-nam-num-pro">
                <h1>ISLAMIC BOOKS</h1>
                <span className="num-pro">47 products</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-div">
          <div className="bottom-first-div featured-card">
            <img className="featured-img" src={BottomFirstImg} alt="" />
            <div className="same-style-nam-num-pro">
              <h1>BOOKS SERIES</h1>
              <span className="num-pro">54 products</span>
            </div>
          </div>
          <div className="bottom-second-div featured-card">
            <img className="featured-img" src={BottomSecondImg} alt="" />
            <div className="same-style-nam-num-pro">
              <h1>ACCESSORIES</h1>
              <span className="num-pro">24 products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
