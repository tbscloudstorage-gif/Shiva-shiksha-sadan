 
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function CategoriesSix() {
  return (
    <>
      {/* <!-- categories-area-start --> */}
      <div className="it-categories-2-area fix z-index-1 pt-150 pb-130" style={{ backgroundImage: `url(/assets/img/shape/categori-bg-6-1.png)` }}>
        <img className="it-categories-2-shape-1" data-parallax='{"x": 200, "smoothness": 30}' src="assets/img/shape/categori-6-1.png" alt="" />
        <div className="it-categories-2-shape-2"><img src="assets/img/shape/categori-6-2.png" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-categories-section-title-box text-center mb-65">
                <span className="it-section-subtitle style-2">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4534 0.647256C16.4781 1.29751 15.772 2.24767 15.4237 3.33179C12.575 -0.580717 6.97612 -1.03831 3.52709 2.24588V0.939755C3.52709 0.745623 3.36966 0.588193 3.17552 0.588193C2.98139 0.588193 2.82396 0.745623 2.82396 0.939755V3.41215H2.11511V0.939755C2.11511 0.745623 1.95768 0.588193 1.76354 0.588193C1.56941 0.588193 1.41198 0.745623 1.41198 0.939755V3.41215H0.703125V0.939755C0.703125 0.745623 0.545695 0.588193 0.351562 0.588193C0.157395 0.588193 0 0.745623 0 0.939755V4.46972C0 4.99095 0.284414 5.44675 0.706008 5.69091V13.4712C0.706008 14.0723 1.20291 14.5385 1.77525 14.5286C2.35192 14.5223 2.82111 14.0392 2.82111 13.4517V12.9862C4.38898 14.9258 6.67874 15.9407 9 15.9407C11.9782 15.9407 14.5391 14.3037 15.8849 11.9634V13.4712C15.8849 14.0543 16.3593 14.5287 16.9424 14.5287C17.5256 14.5287 18 14.0543 18 13.4712C18 12.8172 18 1.35319 18 0.939755C18 0.659595 17.6869 0.491619 17.4534 0.647256ZM17.2969 1.66215V7.86339C16.8131 7.86339 16.3812 7.86339 15.882 7.86339V4.89726C15.882 3.65547 16.4009 2.48878 17.2969 1.66215ZM0.703125 4.11528H2.82396V4.46972C2.82396 4.85982 2.50664 5.17714 2.11655 5.17714H1.41054C1.02045 5.17714 0.703125 4.85982 0.703125 4.46972V4.11528ZM1.76358 13.8256C1.56758 13.8256 1.40913 13.6666 1.40913 13.4712V5.88026H2.11799V13.4517C2.11799 13.655 1.9608 13.8256 1.76358 13.8256ZM9 15.2376C6.48928 15.2376 4.13104 13.9107 2.82111 11.7694V5.69091C3.24267 5.44672 3.52709 4.99095 3.52709 4.46972V3.26394C4.90511 1.67248 6.89224 0.76183 9 0.76183C11.541 0.76183 13.9115 2.11007 15.2153 4.28839C15.1526 4.8145 15.1901 4.87019 15.1789 8.21496C15.1789 8.40909 15.3363 8.56652 15.5304 8.56652H15.8849V10.2371C14.9142 13.2302 12.1542 15.2376 9 15.2376ZM17.2969 13.4712C17.2969 13.6666 17.1379 13.8256 16.9424 13.8256C16.747 13.8256 16.588 13.6666 16.588 13.4712C16.588 12.8849 16.588 9.14452 16.588 8.56648H17.2969V13.4712Z" fill="#03594E" />
                    <path d="M9.00128 2.52979C5.98509 2.52979 3.53125 4.98362 3.53125 7.99982C3.53125 11.016 5.98509 13.4698 9.00128 13.4698C12.0175 13.4698 14.4713 11.016 14.4713 7.99978C14.4713 4.98359 12.0175 2.52979 9.00128 2.52979ZM9.00128 12.7667C6.37279 12.7667 4.23438 10.6283 4.23438 7.99978C4.23438 5.37129 6.37279 3.23291 9.00128 3.23291C11.6298 3.23291 13.7682 5.37132 13.7682 7.99982C13.7682 10.6283 11.6298 12.7667 9.00128 12.7667Z" fill="#03594E" />
                  </svg>
                  Our Top Categories</span>
                <h4 className="it-section-title">Explore Our Top Categories to <br />
                  <span className="z-index-1">
                    Enhance Your Cooking
                    <span className="it-title-shape-2">
                      <svg width="354" height="17" viewBox="0 0 354 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="354" height="17" fill="#F8C62F" />
                      </svg>
                    </span>
                  </span>
                  Skills
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="it-categories-2-wrapper p-relative">
                <Swiper
                  speed={1500}
                  loop={true}
                  slidesPerView={5}
                  spaceBetween={35}
                  autoplay={{ delay: 1, disableOnInteraction: true, }}
                  pagination={{ el: ".it-testimonial-dots", clickable: true, }}
                  modules={[Pagination, Autoplay]}
                  breakpoints={{
                    '1400': {
                      slidesPerView: 5,
                    },
                    '1200': {
                      slidesPerView: 4,
                    },
                    '992': {
                      slidesPerView: 4,
                    },
                    '768': {
                      slidesPerView: 2,
                    },
                    '576': {
                      slidesPerView: 2,
                    },
                    '0': {
                      slidesPerView: 1,
                    },
                  }}
                  className="swiper it-categories-2-active">

                  <SwiperSlide className="swiper-slide">
                    <div className="it-categories-2-item border-radius-20">
                      <div className="it-categories-2-thumb border-radius-20">
                        <img src="assets/img/categories/categories-6-1.jpg" alt="" />
                      </div>
                      <h6 className="it-categories-2-title">Weeknight Meals</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-categories-2-item border-radius-20">
                      <div className="it-categories-2-thumb border-radius-20">
                        <img src="assets/img/categories/categories-6-2.jpg" alt="" />
                      </div>
                      <h6 className="it-categories-2-title">Chicken Burger</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-categories-2-item border-radius-20">
                      <div className="it-categories-2-thumb border-radius-20">
                        <img src="assets/img/categories/categories-6-3.jpg" alt="" />
                      </div>
                      <h6 className="it-categories-2-title">Thai Takeout</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-categories-2-item border-radius-20">
                      <div className="it-categories-2-thumb border-radius-20">
                        <img src="assets/img/categories/categories-6-4.jpg" alt="" />
                      </div>
                      <h6 className="it-categories-2-title">Essential Eggs</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-categories-2-item border-radius-20">
                      <div className="it-categories-2-thumb border-radius-20">
                        <img src="assets/img/categories/categories-6-5.jpg" alt="" />
                      </div>
                      <h6 className="it-categories-2-title">Chinese food</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-categories-2-item border-radius-20">
                      <div className="it-categories-2-thumb border-radius-20">
                        <img src="assets/img/categories/categories-6-1.jpg" alt="" />
                      </div>
                      <h6 className="it-categories-2-title">Weeknight Meals</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-categories-2-item border-radius-20">
                      <div className="it-categories-2-thumb border-radius-20">
                        <img src="assets/img/categories/categories-6-2.jpg" alt="" />
                      </div>
                      <h6 className="it-categories-2-title">Chicken Burger</h6>
                    </div>
                  </SwiperSlide>

                  <div className="it-testimonial-dots text-center mt-70"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- categories-area-end --> */}
    </>
  )
}
