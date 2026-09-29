 
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface TestimonialSixProps {
  style_2?: boolean;
}

export default function TestimonialSix({ style_2 }: TestimonialSixProps) {
  return (
    <>
      {/* <!-- testimonial-area-start  --> */}
      <section className={`it-testimonial-2-area z-index-1  ${style_2 ? 'about-style-2 pt-150 pb-130' : 'fix pt-130 pb-130'}`}
      style={{backgroundImage: `url(${style_2 ? "/assets/img/shape/categori-bg-6-1.png" : ""})`, backgroundRepeat: 'no-repeat'}}
      >
        {style_2 ? 
        <div className="it-testimonial-2-shape-2"><img src="assets/img/shape/testimonial-6-1.png" alt="" /></div>  
        :
        <>
        <img className="it-testimonial-2-shape-1" src="assets/img/shape/testimonial-6-2.png" alt="" />
        <div className="it-testimonial-2-shape-2"><img src="assets/img/shape/testimonial-6-1.png" alt="" /></div>        

        </>
        
      }
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-testimonial-section-title-box text-center mb-60">
                <span className="it-section-subtitle-3">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4534 0.647256C16.4781 1.29751 15.772 2.24767 15.4237 3.33179C12.575 -0.580717 6.97612 -1.03831 3.52709 2.24588V0.939755C3.52709 0.745623 3.36966 0.588193 3.17552 0.588193C2.98139 0.588193 2.82396 0.745623 2.82396 0.939755V3.41215H2.11511V0.939755C2.11511 0.745623 1.95768 0.588193 1.76354 0.588193C1.56941 0.588193 1.41198 0.745623 1.41198 0.939755V3.41215H0.703125V0.939755C0.703125 0.745623 0.545695 0.588193 0.351562 0.588193C0.157395 0.588193 0 0.745623 0 0.939755V4.46972C0 4.99095 0.284414 5.44675 0.706008 5.69091V13.4712C0.706008 14.0723 1.20291 14.5385 1.77525 14.5286C2.35192 14.5223 2.82111 14.0392 2.82111 13.4517V12.9862C4.38898 14.9258 6.67874 15.9407 9 15.9407C11.9782 15.9407 14.5391 14.3037 15.8849 11.9634V13.4712C15.8849 14.0543 16.3593 14.5287 16.9424 14.5287C17.5256 14.5287 18 14.0543 18 13.4712C18 12.8172 18 1.35319 18 0.939755C18 0.659595 17.6869 0.491619 17.4534 0.647256ZM17.2969 1.66215V7.86339C16.8131 7.86339 16.3812 7.86339 15.882 7.86339V4.89726C15.882 3.65547 16.4009 2.48878 17.2969 1.66215ZM0.703125 4.11528H2.82396V4.46972C2.82396 4.85982 2.50664 5.17714 2.11655 5.17714H1.41054C1.02045 5.17714 0.703125 4.85982 0.703125 4.46972V4.11528ZM1.76358 13.8256C1.56758 13.8256 1.40913 13.6666 1.40913 13.4712V5.88026H2.11799V13.4517C2.11799 13.655 1.9608 13.8256 1.76358 13.8256ZM9 15.2376C6.48928 15.2376 4.13104 13.9107 2.82111 11.7694V5.69091C3.24267 5.44672 3.52709 4.99095 3.52709 4.46972V3.26394C4.90511 1.67248 6.89224 0.76183 9 0.76183C11.541 0.76183 13.9115 2.11007 15.2153 4.28839C15.1526 4.8145 15.1901 4.87019 15.1789 8.21496C15.1789 8.40909 15.3363 8.56652 15.5304 8.56652H15.8849V10.2371C14.9142 13.2302 12.1542 15.2376 9 15.2376ZM17.2969 13.4712C17.2969 13.6666 17.1379 13.8256 16.9424 13.8256C16.747 13.8256 16.588 13.6666 16.588 13.4712C16.588 12.8849 16.588 9.14452 16.588 8.56648H17.2969V13.4712Z" fill="#03594E" />
                    <path d="M9.00128 2.52979C5.98509 2.52979 3.53125 4.98362 3.53125 7.99982C3.53125 11.016 5.98509 13.4698 9.00128 13.4698C12.0175 13.4698 14.4713 11.016 14.4713 7.99978C14.4713 4.98359 12.0175 2.52979 9.00128 2.52979ZM9.00128 12.7667C6.37279 12.7667 4.23438 10.6283 4.23438 7.99978C4.23438 5.37129 6.37279 3.23291 9.00128 3.23291C11.6298 3.23291 13.7682 5.37132 13.7682 7.99982C13.7682 10.6283 11.6298 12.7667 9.00128 12.7667Z" fill="#03594E" />
                  </svg>
                  Testimonial</span>
                <h4 className="it-section-title">What Our Learners Say About <br />
                  <span className="z-index-1">
                    Educeet’s Impact
                    <span className="it-title-shape-2">
                      <svg width="354" height="17" viewBox="0 0 354 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="354" height="17" fill="#F8C62F" />
                      </svg>
                    </span>
                  </span>
                  and Value
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="it-testimonial-2-wrapper p-relative">
                <Swiper 
                  loop={true}
                  slidesPerView={2}
                  spaceBetween={35}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  pagination={{
                    clickable: true,
                    el: '.it-testimonial-dots'
                  }}
                  navigation={{
                    nextEl: '.arrow-next',
                    prevEl: '.arrow-prev'
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  breakpoints={{
                    '1400': {
                      slidesPerView: 2,
                    },
                    '1200': {
                      slidesPerView: 2,
                    },
                    '992': {
                      slidesPerView: 2,
                    },
                    '768': {
                      slidesPerView: 1,
                    },
                    '576': {
                      slidesPerView: 1,
                    },
                    '0': {
                      slidesPerView: 1,
                    },
                  }}
                className="swiper it-testimonial-2-active">
         
                    <SwiperSlide className="swiper-slide">
                      <div className="it-testimonial-2-item">
                        <div className="row gx-0">
                          <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="it-testimonial-2-thumb p-relative thumb-overlay border-radius-20">
                              <img src="assets/img/testimonial/thumb-5-1.jpg" alt="" />
                              <a className="it-about-thumb-icon pulse-white" href="#">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="currentcolor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="it-testimonial-2-content-wrap">
                              <div className="it-testimonial-2-content">
                                <div className="it-testimonial-2-avatar-info">
                                  <h5 className="it-testimonial-2-avatar-name">Roddi San</h5>
                                  <span>Foundr & CEO  UIPainter</span>
                                </div>
                                <div className="it-testimonial-2-text">
                                  <p>EEduceet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence.</p>
                                </div>
                                <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                                  <div className="it-testimonial-2-quote">
                                    <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                                      <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                                    </svg>
                                  </div>
                                  <span className="it-testimonial-2-date">Jan 12,2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-testimonial-2-item">
                        <div className="row gx-0">
                          <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="it-testimonial-2-thumb p-relative thumb-overlay border-radius-20">
                              <img src="assets/img/testimonial/thumb-5-2.jpg" alt="" />
                              <a className="it-about-thumb-icon pulse-white" href="#">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="currentcolor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="it-testimonial-2-content-wrap">
                              <div className="it-testimonial-2-content">
                                <div className="it-testimonial-2-avatar-info">
                                  <h5 className="it-testimonial-2-avatar-name">Bill Lancaster</h5>
                                  <span>Foundr & CEO  UIPainter</span>
                                </div>
                                <div className="it-testimonial-2-text">
                                  <p>EEduceet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence.</p>
                                </div>
                                <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                                  <div className="it-testimonial-2-quote">
                                    <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                                      <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                                    </svg>
                                  </div>
                                  <span className="it-testimonial-2-date">Jan 12,2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-testimonial-2-item">
                        <div className="row gx-0">
                          <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="it-testimonial-2-thumb p-relative thumb-overlay border-radius-20">
                              <img src="assets/img/testimonial/thumb-5-1.jpg" alt="" />
                              <a className="it-about-thumb-icon pulse-white" href="#">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="currentcolor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="it-testimonial-2-content-wrap">
                              <div className="it-testimonial-2-content">
                                <div className="it-testimonial-2-avatar-info">
                                  <h5 className="it-testimonial-2-avatar-name">Roddi San</h5>
                                  <span>Foundr & CEO  UIPainter</span>
                                </div>
                                <div className="it-testimonial-2-text">
                                  <p>EEduceet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence.</p>
                                </div>
                                <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                                  <div className="it-testimonial-2-quote">
                                    <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                                      <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                                    </svg>
                                  </div>
                                  <span className="it-testimonial-2-date">Jan 12,2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="it-testimonial-2-item">
                        <div className="row gx-0">
                          <div className="col-lg-5 col-md-5 col-sm-5">
                            <div className="it-testimonial-2-thumb p-relative thumb-overlay border-radius-20">
                              <img src="assets/img/testimonial/thumb-5-2.jpg" alt="" />
                              <a className="it-about-thumb-icon pulse-white" href="#">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 7.93782C11.1667 7.55292 11.1667 6.59067 10.5 6.20577L1.5 1.00962C0.833333 0.624718 0 1.10584 0 1.87564V12.2679C0 13.0378 0.833333 13.5189 1.5 13.134L10.5 7.93782Z" fill="currentcolor" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="it-testimonial-2-content-wrap">
                              <div className="it-testimonial-2-content">
                                <div className="it-testimonial-2-avatar-info">
                                  <h5 className="it-testimonial-2-avatar-name">Bill Lancaster</h5>
                                  <span>Foundr & CEO  UIPainter</span>
                                </div>
                                <div className="it-testimonial-2-text">
                                  <p>EEduceet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence.</p>
                                </div>
                                <div className="it-testimonial-2-bottom d-flex align-items-center justify-content-between">
                                  <div className="it-testimonial-2-quote">
                                    <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M14.1176 0H7.05882C5.18671 0 3.39127 0.743695 2.06748 2.06748C0.743695 3.39127 0 5.18671 0 7.05882L0 14.1176C0 15.0537 0.371848 15.9514 1.03374 16.6133C1.69563 17.2752 2.59335 17.6471 3.52941 17.6471H13.9588C13.5401 20.1115 12.2638 22.3487 10.3553 23.9633C8.44691 25.5779 6.02921 26.4659 3.52941 26.4706C3.06138 26.4706 2.61252 26.6565 2.28158 26.9875C1.95063 27.3184 1.76471 27.7673 1.76471 28.2353C1.76471 28.7033 1.95063 29.1522 2.28158 29.4831C2.61252 29.8141 3.06138 30 3.52941 30C7.27235 29.9958 10.8608 28.5071 13.5075 25.8604C16.1541 23.2137 17.6429 19.6253 17.6471 15.8824V3.52941C17.6471 2.59335 17.2752 1.69563 16.6133 1.03374C15.9514 0.371848 15.0537 0 14.1176 0Z" fill="#4C505B" />
                                      <path d="M38.8247 0H31.7659C29.8937 0 28.0983 0.743695 26.7745 2.06748C25.4507 3.39127 24.707 5.18671 24.707 7.05882V14.1176C24.707 15.0537 25.0789 15.9514 25.7408 16.6133C26.4027 17.2752 27.3004 17.6471 28.2364 17.6471H38.6659C38.2471 20.1115 36.9708 22.3487 35.0624 23.9633C33.1539 25.5779 30.7362 26.4659 28.2364 26.4706C27.7684 26.4706 27.3196 26.6565 26.9886 26.9875C26.6577 27.3184 26.4717 27.7673 26.4717 28.2353C26.4717 28.7033 26.6577 29.1522 26.9886 29.4831C27.3196 29.8141 27.7684 30 28.2364 30C31.9794 29.9958 35.5678 28.5071 38.2145 25.8604C40.8611 23.2137 42.3499 19.6253 42.3541 15.8824V3.52941C42.3541 2.59335 41.9822 1.69563 41.3203 1.03374C40.6585 0.371848 39.7607 0 38.8247 0Z" fill="#4C505B" />
                                    </svg>
                                  </div>
                                  <span className="it-testimonial-2-date">Jan 12,2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
       
                  <div className="it-testimonial-dots text-center mt-60"></div>
                </Swiper>
                <div className="it-testimonial-arrow-wrap">
                  <button className="arrow-prev">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.81934 0.0849609C8.5201 0.0849894 8.32582 0.116974 8.23633 0.180664C8.14697 0.244474 8.07504 0.390586 8.02246 0.619141C7.94886 1.12972 7.813 1.65424 7.61328 2.19141C7.05586 3.90448 6.13205 5.43175 4.84375 6.77246C3.55528 8.11319 2.0533 9.07686 0.338867 9.66211C0.113122 9.74189 0.000144992 9.8831 0 10.085C8.0099e-05 10.2869 0.11313 10.428 0.338867 10.5078C2.05323 11.093 3.55532 12.0568 4.84375 13.3975C6.13205 14.7382 7.05586 16.2654 7.61328 17.9785C7.78677 18.5157 7.92256 19.0267 8.02246 19.5107C8.07505 19.7661 8.14694 19.9264 8.23633 19.9902C8.32595 20.0538 8.52042 20.0849 8.81934 20.085C9.35038 20.085 9.61705 19.944 9.61719 19.6621C9.6169 19.5869 9.53985 19.2677 9.3877 18.7051C8.6041 15.5128 6.85008 12.8947 4.12598 10.8516H21V9.31934H4.12598C5.91933 7.9679 7.30756 6.33338 8.29102 4.41797C8.92196 3.1891 9.33728 1.97626 9.53711 0.779297C9.53712 0.726125 9.54576 0.672313 9.56152 0.619141C9.57193 0.57166 9.57712 0.534295 9.57715 0.507812C9.57693 0.226057 9.324 0.0849609 8.81934 0.0849609Z" fill="currentcolor" />
                      <path d="M8.81934 0.0849609C8.5201 0.0849894 8.32582 0.116974 8.23633 0.180664C8.14697 0.244474 8.07504 0.390586 8.02246 0.619141C7.94886 1.12972 7.813 1.65424 7.61328 2.19141C7.05586 3.90448 6.13205 5.43175 4.84375 6.77246C3.55528 8.11319 2.0533 9.07686 0.338867 9.66211C0.113122 9.74189 0.000144992 9.8831 0 10.085C8.0099e-05 10.2869 0.11313 10.428 0.338867 10.5078C2.05323 11.093 3.55532 12.0568 4.84375 13.3975C6.13205 14.7382 7.05586 16.2654 7.61328 17.9785C7.78677 18.5157 7.92256 19.0267 8.02246 19.5107C8.07505 19.7661 8.14694 19.9264 8.23633 19.9902C8.32595 20.0538 8.52042 20.0849 8.81934 20.085C9.35038 20.085 9.61705 19.944 9.61719 19.6621C9.6169 19.5869 9.53985 19.2677 9.3877 18.7051C8.6041 15.5128 6.85008 12.8947 4.12598 10.8516H21V9.31934H4.12598C5.91933 7.9679 7.30756 6.33338 8.29102 4.41797C8.92196 3.1891 9.33728 1.97626 9.53711 0.779297C9.53712 0.726125 9.54576 0.672313 9.56152 0.619141C9.57193 0.57166 9.57712 0.534295 9.57715 0.507812C9.57693 0.226057 9.324 0.0849609 8.81934 0.0849609Z" stroke="#03594E" />
                    </svg>
                  </button>
                  <button className="arrow-next">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.1807 0.0849609C12.4799 0.0849894 12.6742 0.116974 12.7637 0.180664C12.853 0.244474 12.925 0.390586 12.9775 0.619141C13.0511 1.12972 13.187 1.65424 13.3867 2.19141C13.9441 3.90448 14.868 5.43175 16.1562 6.77246C17.4447 8.11319 18.9467 9.07686 20.6611 9.66211C20.8869 9.74189 20.9999 9.8831 21 10.085C20.9999 10.2869 20.8869 10.428 20.6611 10.5078C18.9468 11.093 17.4447 12.0568 16.1562 13.3975C14.868 14.7382 13.9441 16.2654 13.3867 17.9785C13.2132 18.5157 13.0774 19.0267 12.9775 19.5107C12.925 19.7661 12.8531 19.9264 12.7637 19.9902C12.6741 20.0538 12.4796 20.0849 12.1807 20.085C11.6496 20.085 11.3829 19.944 11.3828 19.6621C11.3831 19.5869 11.4602 19.2677 11.6123 18.7051C12.3959 15.5128 14.1499 12.8947 16.874 10.8516H0V9.31934H16.874C15.0807 7.9679 13.6924 6.33338 12.709 4.41797C12.078 3.1891 11.6627 1.97626 11.4629 0.779297C11.4629 0.726125 11.4542 0.672313 11.4385 0.619141C11.4281 0.57166 11.4229 0.534295 11.4229 0.507812C11.4231 0.226057 11.676 0.0849609 12.1807 0.0849609Z" fill="currentcolor" />
                      <path d="M12.1807 0.0849609C12.4799 0.0849894 12.6742 0.116974 12.7637 0.180664C12.853 0.244474 12.925 0.390586 12.9775 0.619141C13.0511 1.12972 13.187 1.65424 13.3867 2.19141C13.9441 3.90448 14.868 5.43175 16.1562 6.77246C17.4447 8.11319 18.9467 9.07686 20.6611 9.66211C20.8869 9.74189 20.9999 9.8831 21 10.085C20.9999 10.2869 20.8869 10.428 20.6611 10.5078C18.9468 11.093 17.4447 12.0568 16.1562 13.3975C14.868 14.7382 13.9441 16.2654 13.3867 17.9785C13.2132 18.5157 13.0774 19.0267 12.9775 19.5107C12.925 19.7661 12.8531 19.9264 12.7637 19.9902C12.6741 20.0538 12.4796 20.0849 12.1807 20.085C11.6496 20.085 11.3829 19.944 11.3828 19.6621C11.3831 19.5869 11.4602 19.2677 11.6123 18.7051C12.3959 15.5128 14.1499 12.8947 16.874 10.8516H0V9.31934H16.874C15.0807 7.9679 13.6924 6.33338 12.709 4.41797C12.078 3.1891 11.6627 1.97626 11.4629 0.779297C11.4629 0.726125 11.4542 0.672313 11.4385 0.619141C11.4281 0.57166 11.4229 0.534295 11.4229 0.507812C11.4231 0.226057 11.676 0.0849609 12.1807 0.0849609Z" stroke="#03594E" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonial-area-end --> */}

    </>
  )
}
