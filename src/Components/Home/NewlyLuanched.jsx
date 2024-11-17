import "../../Styles/Home/NewlyLaunched.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "./Card";
import { useProductContext } from "../../Contexts/ProductsContext";

const NewLaunched = () => {
  const data = useProductContext();
  return (
    <div className="newly-launched-back-div">
      <div className="newly-launched">
        <div className="newly-launched-title">
          <h1>NEWLY LAUNCHED</h1>
          <a href="#">View All</a>
        </div>
        <div className="newly-launched-swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={4}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.products &&
              data.products.map((data) => {
                return (
                  <SwiperSlide className="newly-launched-card">
                    <Card data={data} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewLaunched;
