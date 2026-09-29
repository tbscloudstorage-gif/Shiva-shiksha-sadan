 
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



export default function BrandTwo() {
  return (
    <>
      {/* <!-- brand-area-start --> */}
      <div className="it-brand-2-area theme-bg z-index-1 pt-90 pb-90">
        <img className="it-brand-2-shape-1 d-none d-xl-block" src="assets/img/shape/brand-2-1.png" alt="" />
        <img className="it-brand-2-shape-2 d-none d-xl-block" src="assets/img/shape/brand-2-2.png" alt="" />
        <img className="it-brand-2-shape-3 d-none d-xl-block" src="assets/img/shape/brand-2-3.png" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-brand-2-wrap">
                <Swiper
                  loop={true}
                  freeMode={true}
                  slidesPerView={'auto'}
                  spaceBetween={85}
                  centeredSlides={true}
                  allowTouchMove={false}
                  speed={2500}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    '1400': {
                      slidesPerView: 5,
                    },
                    '1200': {
                      slidesPerView: 5,
                    },
                    '992': {
                      slidesPerView: 4,
                    },
                    '768': {
                      slidesPerView: 3,
                    },
                    '576': {
                      slidesPerView: 2,
                    },
                    '0': {
                      slidesPerView: 1,
                    },
                  }}
                  className="swiper it-brand-active slider-transtion d-flex align-items-center">

                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-1.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-2.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-3.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-4.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-5.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-4.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-2.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-3.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-4.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-5.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-brand-2-item text-center">
                      <img src="assets/img/brand/brand-2-4.png" alt="" />
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- brand-area-end --> */}
    </>
  )
}
