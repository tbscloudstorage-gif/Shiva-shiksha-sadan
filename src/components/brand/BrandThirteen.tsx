 
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandThirteen() {
  return (
    <>
      {/* <!-- text-slider-area-start --> */}
      <div className="it-text-slider-area it-text-slider-ptb fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 it-fade-anim" data-fade-from="bottom" data-delay=".3">
              <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                freeMode={true}
                slidesPerView={"auto"}
                spaceBetween={0}
                centeredSlides={true}
                allowTouchMove={false}
                speed={3500}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: true,
                }}
                className="swiper-container it-text-slider-active slider-transtion">
                <SwiperSlide className="swiper-slide">
                  <div className="it-text-slider-item">
                    <span>Brand Promotion</span>
                    <img src="assets/img/shape/text-slider.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-text-slider-item">
                    <span>Interior Photography</span>
                    <img src="assets/img/shape/text-slider.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-text-slider-item">
                    <span>Family Photoshoot </span>
                    <img src="assets/img/shape/text-slider.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-text-slider-item">
                    <span>Commerical</span>
                    <img src="assets/img/shape/text-slider.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-text-slider-item">
                    <span>Brand Promotion</span>
                    <img src="assets/img/shape/text-slider.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-text-slider-item">
                    <span>Interior Photography</span>
                    <img src="assets/img/shape/text-slider.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-text-slider-item">
                    <span>Family Photoshoot </span>
                    <img src="assets/img/shape/text-slider.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-text-slider-item">
                    <span>Commerical</span>
                    <img src="assets/img/shape/text-slider.png" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- text-slider-area-end --> */}
    </>
  )
}
