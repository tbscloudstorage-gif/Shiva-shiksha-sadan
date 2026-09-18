 
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function BrandSix() {
  return (
    <>
      {/* <!-- brand-area-start --> */}
      <section className="it-brand-4-area z-index-2 pt-130 fix pb-130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-brand-4-top-text text-center mb-45">
                <h5>Specially cooked for the brands</h5>
              </div>
              <Swiper
                loop={true}
                slidesPerView={7}
                spaceBetween={85}
                centeredSlides={true}
                allowTouchMove={false}
                speed={2500}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  '1400': {
                    slidesPerView: 7,
                  },
                  '1200': {
                    slidesPerView: 6,
                  },
                  '992': {
                    slidesPerView: 5,
                  },
                  '768': {
                    slidesPerView: 4,
                  },
                  '576': {
                    slidesPerView: 3,
                  },
                  '0': {
                    slidesPerView: 2,
                  },
                }}

                className="swiper it-brand-5-active slider-transtion d-flex align-items-center">

                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-2.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-3.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-4.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-5.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-2.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-2.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-3.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-4.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-5.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-4-item text-center">
                    <img src="assets/img/brand/brand-6-2.png" alt="" />
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- brand-area-end -->  */}
    </>
  )
}
