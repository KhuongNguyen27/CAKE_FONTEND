import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider(props) {
  return (
    <>
      <div className="slider-section slider-active overflow-hidden">
        
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        
          modules={[Autoplay]}
          className="swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
        >

          <SwiperSlide 
            style={{ backgroundImage: "url(assets/images/slider/slider-01.jpg)" }}
            className="swiper-slide single-slider animation-style-01"  
          >
            <div className="container">
                <div className="slider-content text-center mx-auto">
                  <img
                    className="slider-content__shape"
                    width={95}
                    height={108}
                    src="assets/images/slider/shape-01.png"
                    alt="Shape"
                  />
                  <h1 className="slider-content__title text-white">
                    Bring The Best Experience
                  </h1>
                  <a
                    className="slider-content__btn btn btn-primary btn-hover-black"
                    href="single-product.html"
                  >
                    Order Now
                  </a>
                </div>
              </div>

          </SwiperSlide>
          <SwiperSlide
          style={{ backgroundImage: "url(assets/images/slider/slider-02.jpg)" }}
          className="swiper-slide single-slider animation-style-01"
          >
             <div className="container">
                <div className="slider-content text-center custom-ms-01">
                  <img
                    className="slider-content__shape"
                    width={95}
                    height={62}
                    src="assets/images/slider/shape-02.png"
                    alt="Shape"
                  />
                  <h1 className="slider-content__title text-white">
                    Taste That Lasts Forever{" "}
                  </h1>
                  <a
                    className="slider-content__btn btn btn-primary btn-hover-black"
                    href="single-product.html"
                  >
                    Order Now{" "}
                  </a>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  );
}

export default Slider;