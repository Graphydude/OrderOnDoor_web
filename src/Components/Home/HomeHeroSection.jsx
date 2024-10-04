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
import UrduBookImg from "../../Images/HomeFeaturedImages/1_right.webp";
import ChildrenBookImg from "../../Images/HomeFeaturedImages/2_right.webp";
import IeltsBookImg from "../../Images/HomeFeaturedImages/3_right.webp";
import IslamicBookImg from "../../Images/HomeFeaturedImages/4_right.webp";
import BookSeriesImg from "../../Images/HomeFeaturedImages/1_bottom.webp";
import AccessoriesImg from "../../Images/HomeFeaturedImages/2_bottom.webp";

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
            disableOnInteraction: true,
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
        <div className="featured-cards-back-div">
          <div className="featured-above-div">
            <div className="featured-left-back-div">
              <div className="featured-left-div featured-card">
                <img src={EnglishBookImg} alt="image" />
                <div className="featured-details">
                  <h1 className="featured-left-h1">ENGLISH NOVELS/BOOKS</h1>
                  <span>750 products</span>
                </div>
              </div>
            </div>
            <div className="featured-right-div">
              <div className="right-above-div">
                <div className="featured-card">
                  <img src={UrduBookImg} alt="image" />
                  <div className="featured-details">
                    <h1>URDU BOOKS</h1>
                    <span>117 products</span>
                  </div>
                </div>
                <div className="featured-card">
                  <img src={ChildrenBookImg} alt="image" />
                  <div className="featured-details">
                    <h1>CHILDREN BOOKS</h1>
                    <span>90 products</span>
                  </div>
                </div>
              </div>
              <div className="right-bottom-div">
                <div className="featured-card">
                  <img src={IeltsBookImg} alt="image" />
                  <div className="featured-details">
                    <h1>IWLTS BOOKS</h1>
                    <span>9 products</span>
                  </div>
                </div>
                <div className="featured-card">
                  <img src={IslamicBookImg} alt="image" />
                  <div className="featured-details">
                    <h1>ISLAMIC BOOKS</h1>
                    <span>42 products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-bottom-back-div">
            <div className="featured-bottom-div">
              <div className="featured-card">
                <img src={BookSeriesImg} alt="image" />
                <div className="featured-details">
                  <h1>BOOKS SERIES</h1>
                  <span>54 products</span>
                </div>
              </div>
              <div className="featured-card">
                <img src={AccessoriesImg} alt="image" />
                <div className="featured-details">
                  <h1>ACCESSORIES</h1>
                  <span>21 products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
