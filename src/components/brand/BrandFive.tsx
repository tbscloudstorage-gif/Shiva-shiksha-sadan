 
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



export default function BrandFive() {
  return (
    <>
      {/* <!-- brand-area-start --> */}
      <div className="it-brand-5-area z-index-2 fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Swiper
                loop={true}
                slidesPerView={7}
                spaceBetween={20}
                centeredSlides={true}
                allowTouchMove={false}
                speed={2500}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  '1800': {
                    slidesPerView: 7,
                  },
                  '1600': {
                    slidesPerView: 6,
                  },
                  '1400': {
                    slidesPerView: 6,
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
                    slidesPerView: 3,
                  },
                  '0': {
                    slidesPerView: 2,
                  },
                }}
                className="swiper it-brand-6-active slider-transtion d-flex align-items-center">

                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-7.png" alt="" />
                    <span>English</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-4.png" alt="" />
                    <span>German</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-8.png" alt="" />
                    <span>Spanish</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-3.png" alt="" />
                    <span>Chinese</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-6.png" alt="" />
                    <span>American</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-9.png" alt="" />
                    <span>Italian</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-10.png" alt="" />
                    <span>Poland</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-7.png" alt="" />
                    <span>English</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-4.png" alt="" />
                    <span>German</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-8.png" alt="" />
                    <span>Spanish</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-3.png" alt="" />
                    <span>Chinese</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-6.png" alt="" />
                    <span>American</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-9.png" alt="" />
                    <span>Italian</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="it-brand-5-item d-flex align-items-center">
                    <img src="assets/img/course/flag-5-10.png" alt="" />
                    <span>Poland</span>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- brand-area-end --> */}
    </>
  )
}
